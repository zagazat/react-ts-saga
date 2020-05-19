export interface IRouter {
    routes: [],
    history: object,
    store: object
}

export interface IRoute {
    [key: string]: {
        path: string
        exact: boolean
        protected: boolean
        component: object
    }
}

export interface IModule {
    getSagas: object
    getRoutes: object
    getReducers: object
}