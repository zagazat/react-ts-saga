//import {createBrowserHistory} from 'history'
import createSagaMiddleware from 'redux-saga';
//import logger from 'redux-logger';
import { getRoutes } from './routes';
import { configureStore } from './store';
import { configureMiddlewares } from './middlewares';
import { configureReducers } from './reducers';
import { configureSagas } from './sagas';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';

/**
 * @param modules
 * @param initState
 * @return {{store: *, routes: *, history: *}}
 */
export default function(modules, initState) {
	const history = createBrowserHistory();
	const routes = getRoutes(modules);
	const sagaMiddleware = createSagaMiddleware();

	const middleware = configureMiddlewares(
		modules,
		sagaMiddleware,
		routerMiddleware(history)
	);

	const store = configureStore({
		middleware,
		reducers: configureReducers(modules),
		initState,
		history
	});

	sagaMiddleware.run(configureSagas(modules));

	// todo: изменён возвращаемый дескриптор после вызова run()?
	// function runSagas() {
	// 	const task = sagaMiddleware.run(configureSagas(modules));
	// 	task.done.catch(error => {
	// 		//@if DEBUG
	// 		//eslint-disable-next-line
	// 		console.error('Ошибка в saga', error);
	// 		//@endif
	// 		runSagas();
	// 		store.dispatch({type: '@@core/GLOBAL_SAGA_ERROR', error});
	// 	});
	// }
	//
	// runSagas();

	return {
		store,
		routes,
		history
	};
}
