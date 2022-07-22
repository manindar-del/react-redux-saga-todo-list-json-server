import axios from "axios";
import { ITask } from "../../../Pages/Interface/interface";
import { TodoQuery } from "../../../Pages/Interface/Todo.interface";
axios.defaults.baseURL = "http://localhost:8000";

export const getTodoListAPI = async (todos?: TodoQuery) => {
  const { data } = await axios.get(`/todos`);
  return data as ITask[];
};
export const setTodoAPI = async (todos?: TodoQuery) => {
  axios.post(`/todos?_page&_limit=10`, todos);
};
export const deleteTodoByIdAPI = async (id: ITask) => axios.delete(`/todos/${id}`);
export const updateTodoAPI = async (todos:ITask) => axios.put(`/todos/${todos.id}`, todos);
 