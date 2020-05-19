import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router/immutable";
import { createBrowserHistory } from "history";
import { all } from "redux-saga/effects";
import { Map } from "immutable";
import createStore from "./store";
import getRoutes from "./routes";
import getReducers from "./reducer";
import getMiddlewares from "./middlewares";

function getRootSaga(modules) {
	const sagas = modules.reduce((list, module) => {
		if (module.getSagas) {
			return list.concat(module.getSagas());
		}

		return list;
	}, []);

	return function*() {
		yield all(sagas);
	};
}

export default (modules, initState = Map()) => {
	const history = createBrowserHistory();
	const sagaMiddleware = createSagaMiddleware();
	const routes = getRoutes(modules);

	let middleware;
	let enableRaven = false;

	middleware = getMiddlewares(modules, routerMiddleware(history), sagaMiddleware);

	const store = createStore({
		middleware: middleware,
		reducers: getReducers(modules),
		initState: initState,
		history
	});

	function runSaga() {
		const task = sagaMiddleware.run(getRootSaga(modules));

		// @ts-ignore
		task.done.catch(err => {
			runSaga();
			store.dispatch({type: "@@core/GLOBAL_SAGA_ERROR", err});
		});
	}

	runSaga();

	return {
		store,
		routes,
		history
	};
};