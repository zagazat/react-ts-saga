import {reducer as formReducer} from 'redux-form';
import {isFunc} from '../../common/utils/helper';

/**
 * Collect reducers from all modules
 * @param modules
 */
export const configureReducers = modules => {
	const reducers = {
		form: formReducer,
	};
	return modules
		.filter(module => isFunc(module.getReducers))
		.reduce((reducers, module) => {
			const r = module.getReducers(createReducer);
			return {...reducers, ...r}
		}, reducers);
};

function defaultHandler(state, action) {
	return state;
}

export function createReducer(initialState, actionHandlers) {
	return function reducer(state = initialState, action) {
		const handler = actionHandlers[action.type] || actionHandlers.default || defaultHandler;
		return handler(state, action.payload, action);
	}
}

