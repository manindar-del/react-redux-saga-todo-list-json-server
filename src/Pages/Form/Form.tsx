/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceAction } from "../Todo/Action/ruducer/TodoSlice";
import { ITask } from "../Interface/interface";
import { RootState } from "../../Store/config";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../Store/hooks";

const schema = yup.object({
  title: yup.string().min(4).required(),
  complete: yup.boolean().required(),
});

export default function Form() {
  const list = useAppSelector((state) => state.todo.list);

  const { id } = useParams();

  const dispatch = useDispatch();
  const {
    register: todoRegister,
    handleSubmit: todoSubmit,
    setValue,
    formState: { errors: todoError },
  } = useForm<ITask>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ITask) => {
    if (list && list.length && id) {
      const todo = list.find((el) => Number(id) === el.id);
      if (todo) {
        const newTodo: ITask = { ...data, id: +id };
        dispatch(todoSliceAction.updateToDo(newTodo));
        return;
      }
    }
    dispatch(todoSliceAction.addToDo({ ...data, id: Date.now() }));
    setValue("title", "");
    setValue("complete", true);
  };

  useEffect(() => {
    if (list && list.length && id) {
      const todo = list.find((el) => Number(id) === el.id);
      if (todo) {
        setValue("title", todo.title);
        setValue("complete", todo.complete);
      }
    }
  }, [id, setValue]);

  return (
    <div className="container">
      <h3>Form Validation</h3>
      <form onSubmit={todoSubmit(onSubmit)}>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Todo List
        </label>
        <input
          {...todoRegister("title")}
          type="text"
          className="form-control"
        />

        {todoError.title && <p>{todoError.title.message}</p>}

        <div className="mb-3 form-check">
          <input
            {...todoRegister("complete")}
            type="checkbox"
            className="form-check-input"
            id="checkbox"
          />
          <label className="form-check-label" htmlFor="checkbox">
            Complete
          </label>
          <p>{todoError.complete?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

function todo(arg0: { payload: ITask; type: string }, todo: any, arg2: {}) {
  throw new Error("Function not implemented.");
}
