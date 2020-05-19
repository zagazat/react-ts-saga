import {createReducer} from "redux-immutablejs";
import {reducer as formReducer} from "redux-form/immutable";

export default function getReducers(modules) {
	const reducers = {
		form: formReducer
	};
	return modules
		.filter(m => isFunc(m.getReducers))
		.reduce((reducers, module) => {
			// гоняем через редюсер из immutablejs, чтобы сразу
			// выбрасывать ошибку если редюсер отдает не имутабельный стейт
			let r = module.getReducers(createReducer);

			return {...reducers, ...r};
		}, reducers);
}

function isFunc(f) {
	return typeof f === "function";
}
