import {isFunc} from '../../common/utils/helper';

export const getRoutes = (modules) => {
	return modules
		.filter(module => isFunc(module.getRoutes))
		.reduce((routes, module) => {
			const routesObject = module.getRoutes();
			const routesArray = getRouteFromSection(routesObject);
			return [...routes, ...routesArray];
		}, []);
}

function getRouteFromSection(routesObject) {
	return Object.keys(routesObject).reduce((prev, key) => {
		const route = routesObject[key];
		if (route.nested) {
			route.nested = getRouteFromSection(route.nested);
		}
		return [...prev, route];
	}, []);
}
