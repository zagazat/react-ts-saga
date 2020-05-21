import produce from 'immer';

type DraftFunction = <T, K>(draft: {}, state?: {}, payload?: {}) => void;

export const createMutateReducer = (draftFunction: DraftFunction) => <T, K>(state: T, payload: K) => {
	return produce(state, (draft) => draftFunction(draft, payload, state));
};
