import * as testActions from '../actions/testActions';
import { createMutateReducer } from '../../../../common/utils/createMutateReducer.js';

const initialState = {
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
	[testActions.testAction.request.toString()]: createMutateReducer(draft => {
		draft.users.loading = true;
	}),
	[testActions.testAction.success.toString()]: createMutateReducer((draft, payload) => {
		draft.users.loading = false;
		draft.users.data = payload.data
	}),
	[testActions.testAction.error.toString()]: createMutateReducer((draft, payload) => {
		draft.users.loading = false;
		draft.users.error = payload
	}),

	[testActions.getPostsAction.request.toString()]: createMutateReducer(draft => {
		draft.posts.loading = true;
	}),
	[testActions.getPostsAction.success.toString()]: createMutateReducer((draft, payload) => {
		draft.posts.loading = false;
		draft.posts.data = payload.data
	}),
	[testActions.getPostsAction.error.toString()]: createMutateReducer((draft, payload) => {
		draft.posts.loading = false;
		draft.posts.error = payload
	}),
};

export const testReducers = (createReducer) => {
	return createReducer(initialState, actionHandlers);
};