import { applyMiddleware } from 'redux';
import { isFunc } from '../../common/utils/helper';

/**
 * Inject custom middlewares from each modules
 * @param modules
 * @param customMiddleWares
 * @return {*[]}
 */
export const configureMiddlewares = (modules, ...customMiddleWares) => {
	const composerFuncs = [];
	const middlewares = [...customMiddleWares];

	modules
		.filter(module => isFunc(module.getMiddlewares))
		.forEach(module => {
			const moduleWares = module.getMiddlewares();
			if (moduleWares) {
				middlewares.push(...moduleWares);
			}
		});

	return [
		applyMiddleware(...middlewares.filter(s => !!s)),
		...composerFuncs,
	];
};