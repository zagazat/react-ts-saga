import { all } from 'redux-saga/effects';
import { isFunc } from '../../common/utils/helper';

export const configureSagas = (modules) => {
	const sagas = modules
		.filter(module => isFunc(module.getSagas))
		.reduce((list, module) => {
			return list.concat(module.getSagas() || []);
		}, []);

	return function* () {
		yield all(sagas);
	};
};