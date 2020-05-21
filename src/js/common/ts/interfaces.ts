import { History } from 'history';
import { Store } from 'redux';
import { IAsyncResponseError } from './types';

export interface IRouter {
    routes: Array<IRoute>,
    history: History,
    store: Store
}

export interface IRoute {
    [key: string]: {
        path: string
        exact: boolean
        component: object
    }
}

export interface IModule {
    getSagas: any
    getRoutes: object
    getReducers: object
    getMiddlewares?: object
}

export interface IAsyncResponse {
    loading: boolean
    error: null | IAsyncResponseError
}
