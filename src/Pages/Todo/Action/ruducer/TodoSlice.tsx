import { createSlice, nanoid } from "@reduxjs/toolkit";
import { number } from "yup/lib/locale";
import { ITask } from "../../../Interface/interface";
import { TodoQuery } from "../../../Interface/Todo.interface";

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    list: [] as ITask[],
  },

  reducers: {
    getToDo: (state, { payload }: { payload: TodoQuery }) => {},
    setTodo: (state, { payload }: { payload: ITask[] }) => {
      state.list = payload;
    },

    addToDo: (state, { payload }: { payload: ITask }) => {
      state.list = state.list.concat({
        ...payload,
      });
    },

    updateToDo: (state, { payload }: { payload: ITask }) => {
      state.list = state.list.map((todo) => {
        if (todo.id === payload.id) {
          //console.log(payload);
          return payload;
        }
        return todo;
      });
    },

    deleteTodo: (state, { payload }: { payload: number }) => {
      state.list = state.list.filter((todo) => {
        return todo.id !== payload;
      });
    },
  },
});

export default TodoSlice.reducer;
export const todoSliceAction = TodoSlice.actions;
