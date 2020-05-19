export default function getRoutes(modules) {
	return modules
		.filter(m => isFunc(m.getRoutes))
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

function isFunc(f) {
	return typeof f === "function";
}
