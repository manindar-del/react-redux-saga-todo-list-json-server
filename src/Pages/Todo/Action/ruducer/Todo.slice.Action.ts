
import { ITask } from "../../../Interface/interface";

export const todoSliceActions = {
getToDo: 'todo/getToDo',
getTodoListAction: (payload: ITask[]) => ({ type: todoSliceActions.getToDo, payload }),
addToDo: 'todo/addToDo',
setTodoListAction: (payload: ITask) => ({ type: todoSliceActions.addToDo, payload }),
deleteTodo: 'todo/deleteTodo',
setTodoDeleteAction: (payload: ITask) => ({ type: todoSliceActions.deleteTodo, payload }),
updateToDo: 'todo/updateToDo',
setTodoUpdateAction: (payload: ITask) => ({ type: todoSliceActions.updateToDo, payload }),
}
