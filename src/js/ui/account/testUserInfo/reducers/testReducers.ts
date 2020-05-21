import * as testActions from '../actions/testActions';
import { createMutateReducer } from '../../../../common/utils/createMutateReducer';
import { IPostsState, IUsersState } from '../ts/interfaces';
import { CreateReducer, IAsyncResponseError } from '../../../../common/ts/types';

interface InitialState {
    users: IUsersState,
    posts: IPostsState
}

const initialState: InitialState = {
	users: {
		data: [],
		error: null,
		loading: true
	},
	posts: {
		data: [],
		error: null,
		loading: true
	}
};

const actionHandlers = {
	[testActions.testAction.request.toString()]:
		createMutateReducer((draft: InitialState) => {
			draft.users.loading = true;
		}),
	[testActions.testAction.success.toString()]:
		createMutateReducer((draft: InitialState, payload: IUsersState) => {
			draft.users.loading = false;
			draft.users.data = payload.data
		}),
	[testActions.testAction.error.toString()]:
		createMutateReducer((draft: InitialState, payload: IAsyncResponseError) => {
			draft.users.loading = false;
			draft.users.error = payload;
		}),
	[testActions.getPostsAction.request.toString()]:
		createMutateReducer((draft: InitialState) => {
			draft.posts.loading = true;
		}),
	[testActions.getPostsAction.success.toString()]:
		createMutateReducer((draft: InitialState, payload: IPostsState) => {
			draft.posts.loading = false;
			draft.posts.data = payload.data
		}),
	[testActions.getPostsAction.error.toString()]:
		createMutateReducer((draft: InitialState, payload: IAsyncResponseError) => {
			draft.posts.loading = false;
			draft.posts.error = payload
		}),
};

export const testReducers = (createReducer: CreateReducer) => {
	return createReducer(initialState, actionHandlers);
};
