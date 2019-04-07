import { call, put, takeEvery, all } from 'redux-saga/effects';
import API from '../../network/api';
import actions from '../../actions/actionTypes';

const randomizeList = list => {
  const listCopy = [...list];
  listCopy.sort(function() {
    return 0.5 - Math.random();
  });
  return listCopy;
};

function* fetchMovieList() {
  const apiResponse = yield call(API.fetchMovieList);
  yield put({ type: actions.SET_MOVIE_LIST, data: apiResponse.data.results });
  yield put({
    type: actions.SET_DISPLAYED_MOVIE_LIST,
    data: randomizeList(apiResponse.data.results)
  });
}

export function* watchFetchMovieList() {
  yield takeEvery(actions.FETCH_MOVIE_LIST, fetchMovieList);
}

export default function* moviesSaga() {
  yield all([watchFetchMovieList()]);
}
