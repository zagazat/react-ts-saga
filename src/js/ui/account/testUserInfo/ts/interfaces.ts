import {UserType, PostType} from "./types";
import {IAsyncResponse} from "../../../../common/ts/interfaces";

export interface IUsersState extends IAsyncResponse {
    data: UserType[]
}

export interface IPostsState extends IAsyncResponse {
    data: PostType[]
}

export interface IUserInfoStateProps {
    users: IUsersState,
    posts: IPostsState
}

export interface IUserInfoDispatchProps {
    getTestUsers: () => void,
    getPosts: () => void
}

export interface IUserInfoOwnProps extends IUserInfoDispatchProps, IUserInfoStateProps {}