import {createStore, compose} from "redux";
import {connectRouter} from "connected-react-router/immutable";
import {combineReducers} from "redux-immutablejs";

export default ({middleware, reducers, initState, history}) => {
	const appReducers = combineReducers({...reducers});

	// очистка всего стора приложения, например при разлогивании
	const allReducers = (state, action) => {
		if (action.type === "@@core/CLEAR_APP") {
			state = undefined;
		}
		return appReducers(state, action);
	};

	let enhancer;
	if (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
		enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...middleware);
	} else {
		enhancer = compose(...middleware);
	}

	return createStore(connectRouter(history)(allReducers), initState, enhancer);
};
