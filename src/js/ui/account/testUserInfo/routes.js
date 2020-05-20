import { LoginView } from "./components/LoginView";
export function getRoutes() {
    return {
        login: {
            path: '/login',
            exact: true,
            protected: false,
            component: LoginView
        }
    };
}
//# sourceMappingURL=routes.js.map