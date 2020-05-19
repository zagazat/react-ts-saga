import { LoginView } from "./components/LoginView";
import { IRoute } from "../../../common/ts/interfaces";

export function getRoutes(): IRoute {
    return {
        login: {
            path: '/login',
            exact: true,
            protected: false,
            component: LoginView
        }
    }
}