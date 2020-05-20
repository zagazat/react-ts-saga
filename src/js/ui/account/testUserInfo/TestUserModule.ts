import { getRoutes } from "./routes";
import { IModule } from "../../../common/ts/interfaces";
import { objectType } from "../../../common/ts/types";
// @ts-ignore
import { testReducers } from './reducers/testReducers';
import testSaga from "./sagas/testSaga";

class TestUserModule implements IModule {
    getSagas():any {
        return [
            testSaga(),
        ];
    }

    getReducers(createReducer: any):objectType {
        return {
            test: testReducers(createReducer)
        };
    }

    getRoutes() {
        return getRoutes();
    }

    getMiddlewares():any[] {
        return []
    }
}

export default new TestUserModule()