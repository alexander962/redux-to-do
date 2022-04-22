import { put, takeEvery } from "redux-saga/effects";
import {
  addCountAction,
  ASYNC_ADD_COUNT,
  ASYNC_DELETE_COUNT,
  deleteCountAction,
} from "../Components/store/countReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  // put не отработает, пока не пройдёт задержка
  yield delay(1000);
  yield put(addCountAction());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(deleteCountAction());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_ADD_COUNT, incrementWorker);
  yield takeEvery(ASYNC_DELETE_COUNT, decrementWorker);
}
