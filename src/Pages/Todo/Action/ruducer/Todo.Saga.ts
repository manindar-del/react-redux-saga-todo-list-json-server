import { ITask } from "./../../../Interface/interface";
import { takeEvery, fork, put } from "redux-saga/effects";
import { todoSliceAction } from "../ruducer/TodoSlice";
import { todoSliceActions } from "./Todo.slice.Action";
import {
  setTodoAPI,
  deleteTodoByIdAPI,
  getTodoListAPI,
  updateTodoAPI,
} from "../../../../Lib/Placeholder/Api/todo";
import { TodoQuery } from "../../../Interface/Todo.interface";

// Get Todo
function* getTodo({ payload }: { payload: TodoQuery }): any {
  const getTodo = yield getTodoListAPI();
  //yield put(todoSliceActions.getTodoListAction(getTodo));
  yield put(todoSliceAction.setTodo(getTodo));
}

function* getTodoQuery() {
  yield takeEvery(todoSliceAction.getToDo as any, getTodo);
}

//Add to do
function* todoQueryMiddleWare({ payload }: { payload: TodoQuery }): any {
  const todos = yield setTodoAPI(payload);
  yield put(todoSliceActions.setTodoListAction(todos));
}

function* todoListQuery() {
  yield takeEvery(todoSliceAction.addToDo as any, todoQueryMiddleWare);
}

//delete
function* todoDeleteQueryMiddleWare({ payload }: { payload: ITask }): any {
  const itemsDelete = yield deleteTodoByIdAPI(payload);
  console.log(itemsDelete);

  yield put(todoSliceActions.setTodoDeleteAction(itemsDelete));
}

function* todoDeleteQuery() {
  yield takeEvery(todoSliceAction.deleteTodo as any, todoDeleteQueryMiddleWare);
}

//update
function* todoUpdateQueryMiddleWare({ payload }: { payload: ITask }): any {
  const itemsUpdate = yield updateTodoAPI(payload);
  yield put(todoSliceActions.setTodoUpdateAction(itemsUpdate));
}

function* todoUpdateQuery() {
  yield takeEvery(todoSliceAction.updateToDo as any, todoUpdateQueryMiddleWare);
}

export default function* todoSaga() {
  yield fork(getTodoQuery);
  yield fork(todoListQuery);
  yield fork(todoDeleteQuery);
  yield fork(todoUpdateQuery);
}
