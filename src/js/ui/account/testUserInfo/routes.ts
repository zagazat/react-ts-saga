import { UserViewComponent } from "./components/UserView";
import { IRoute } from "../../../common/ts/interfaces";

export function getRoutes(): IRoute {
    return {
        login: {
            path: '/',
            exact: true,
            component: UserViewComponent
        }
    }
}