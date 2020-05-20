"use strict";
exports.__esModule = true;
exports.createAsyncAction = exports.createAction = void 0;
/**
 * Создает функцию "создания экшена" предварительно закидывая все в payload
 * Чтобы везде использовать только один экспорт и не таскать константу экшена отдельно, а саму функцию отдельно
 * @param type
 * @param args
 * @return {function(*=)}
 */
function createAction(type, args) {
    if (args === void 0) { args = {}; }
    var actionCreator = function (payload) {
        if (payload === void 0) { payload = args; }
        return { type: type, payload: payload };
    };
    actionCreator.toString = function () { return type; };
    return actionCreator;
}
exports.createAction = createAction;
/**
 * @param {string} type
 * @param {*} [args] defaultPayload
 * @return {{request: (function(*=)), success: (function(*=)), error: (function(*=))}}
 */
function createAsyncAction(type, args) {
    if (args === void 0) { args = {}; }
    return {
        request: createAction(type + ".REQUEST", args),
        success: createAction(type + ".SUCCESS", args),
        error: createAction(type + ".ERROR", args)
    };
}
exports.createAsyncAction = createAsyncAction;
