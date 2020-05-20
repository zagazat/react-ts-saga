import produce from 'immer';

export const createMutateReducer = draftFunction => (state, payload) => {
	return produce(state, draft => draftFunction(draft, payload, state));
};
