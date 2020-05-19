import { getRoutes } from "./routes";
import { IModule } from "../../../common/ts/interfaces";

class LoginModule implements IModule {
    getSagas() {
        return [];
    }

    getReducers() {
        return [];
    }

    getRoutes() {
        return getRoutes();
    }
}

export { LoginModule };