export type objectType = {
    [key: string]: any
}

export type CreatedAction = (payload?: ActionPayload) => Action;

export type ActionPayload = string | {
    [key: string]: any
}

export type Action = {
    payload: ActionPayload;
    type: string;
}

export type CreatedAsyncAction = {
    request: CreatedAction;
    success: CreatedAction;
    error: CreatedAction;
}

export type CreateReducer = (
    state: {},
    handlers: {
        [key: string]: any;
    }
) => any;

export type IAsyncResponseError = {
    [key: string]: string | number
}
