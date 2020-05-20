import { takeEvery, put, call } from 'redux-saga/effects';
import * as dataContext from '../api/dataProvider';
import {getPostsAction, testAction} from "../actions/testActions";
import {UserType} from "../ts/types";

export default function* () {
    yield takeEvery(testAction.request, getTestUsersSaga);
    yield takeEvery(getPostsAction.request, getPostsSaga);
}

const getTestUsersSaga = function* () {
    try {
        const users = yield call(dataContext.getTestUsers);
        yield put(testAction.success(<UserType[]>users))
    } catch (e) {
        yield put(testAction.error(e))
    }
};

const getPostsSaga = function* () {
    try {
        const posts = yield call(dataContext.getPosts);
        yield put(getPostsAction.success(posts))
    } catch (e) {
        yield put(getPostsAction.error(e))
    }
}