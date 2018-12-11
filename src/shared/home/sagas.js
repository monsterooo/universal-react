import { call, put, takeEvery, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  FETCH_GITHUB_UESR_REQUESTED,
  FETCH_GITHUB_USER__SUCCESSED,
  FETCH_GITHUB_USER__FAILED,
} from './actions';


export const fetchUser = () => fetch('https://api.github.com/search/users?q=fullname:%E8%92%8B%E8%91%97', {
  method: 'get',
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },
}).then((response) => {
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
});


// 执行异步action任务 搜索github用户
export function* fetchSearchGithubUser() {
  try {
    const user = yield call(fetchUser); // 调用异步接口
    // 发送一个action
    yield put({
      type: FETCH_GITHUB_USER__SUCCESSED,
      payload: user,
    });
  } catch (error) {
    yield put({
      type: FETCH_GITHUB_USER__FAILED,
      payload: error,
    });
  }
}

export function* fetchSearchGithubUserSaga() {
  yield takeEvery(FETCH_GITHUB_UESR_REQUESTED, fetchSearchGithubUser);
}

// 初始化saga调用任务
export default function* rootSaga() {
  yield fork(fetchSearchGithubUserSaga);
  // yield all([
  //   fetchGistsSaga(),
  //   fetchSearchGithubUserSaga(),
  // ]);
}
