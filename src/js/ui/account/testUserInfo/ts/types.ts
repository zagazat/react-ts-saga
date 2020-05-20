import {IUsersState, IPostsState} from "./interfaces";

export type UserType = {
    id: number
    name: string
    username: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export type PostType = {
    id: number
}

export type TestStateType = {
    test: {
        users: IUsersState,
        posts: IPostsState
    }
}