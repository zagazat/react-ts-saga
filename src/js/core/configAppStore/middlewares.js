import {applyMiddleware} from "redux";

/**
 *
 * @param modules
 * @param customMiddleWares
 * @returns {[*,*]}
 */
export default function getMiddlewares(modules, ...customMiddleWares) {
	let middlewares = [...customMiddleWares];

	let composerFuncs = [];

	modules.forEach(module => {
		if (module.getMiddlewares) middlewares.push(module.getMiddlewares());
	});

	return [applyMiddleware(...middlewares), ...composerFuncs];
}
