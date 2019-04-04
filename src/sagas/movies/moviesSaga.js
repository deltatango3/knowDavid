import { call, put, takeEvery, all } from 'redux-saga/effects';
import API from '../../network/api';
import actions from '../../actions/actionTypes';

function* fetchMovieList() {
  const apiResponse = yield call(API.fetchMovieList);
  yield put({ type: actions.SET_MOVIE_LIST, data: apiResponse.data.results });
}

export function* watchFetchMovieList() {
  yield takeEvery(actions.FETCH_MOVIE_LIST, fetchMovieList);
}

export default function* moviesSaga() {
  yield all([watchFetchMovieList()]);
}
