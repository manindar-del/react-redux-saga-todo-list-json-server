import { all } from 'redux-saga/effects';
import todoSaga from '../Pages/Todo/Action/ruducer/Todo.Saga';

export default function* rootSaga() {
  yield all([
    todoSaga(),
  ]);
}
