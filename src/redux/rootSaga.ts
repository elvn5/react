import { takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";

export function* fetchDataSaga() {
  try {
    yield put({ type: "1" });
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
