import { Action, ActionPayload, CreatedAsyncAction, CreatedAction } from '../ts/types';

/**
 * Создает функцию "создания экшена" предварительно закидывая все в payload
 * Чтобы везде использовать только один экспорт и не таскать константу экшена отдельно, а саму функцию отдельно
 * @param type
 * @param args
 * @return {function(*=)}
 */


export function createAction(type: string, args: {} = {}): CreatedAction {
	const actionCreator = (payload: ActionPayload = args): Action => {
		return { type, payload };
	};
	actionCreator.toString = () => type;
	return actionCreator;
}

/**
 * @param {string} type
 * @param {*} [args] defaultPayload
 * @return {{request: (function(*=)), success: (function(*=)), error: (function(*=))}}
 */
export function createAsyncAction(type: string, args: {} = {}): CreatedAsyncAction {
	return {
		request: createAction(`${ type }.REQUEST`, args),
		success: createAction(`${ type }.SUCCESS`, args),
		error: createAction(`${ type }.ERROR`, args),
	};
}
