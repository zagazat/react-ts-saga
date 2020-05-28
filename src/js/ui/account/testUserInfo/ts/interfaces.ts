import { UserType, PostType } from './types';
import { IAsyncResponse } from '../../../../common/ts/interfaces';
import { CreatedAction } from '../../../../common/ts/types';

export interface IUsersState extends IAsyncResponse {
	data: UserType[];
}

export interface IPostsState extends IAsyncResponse {
	data: PostType[];
}

export interface IUserInfoStateProps {
	users: IUsersState;
	posts: IPostsState;
}

export interface IUserInfoDispatchProps {
	getTestUsers: CreatedAction;
	getPosts: CreatedAction;
}

export interface IUserInfoOwnProps extends IUserInfoDispatchProps, IUserInfoStateProps {}
