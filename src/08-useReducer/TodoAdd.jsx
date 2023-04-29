import { useState } from "react";
import { useForm } from "../hooks";

export const TodoAdd = ({onNewTodo}) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onNewSubmit = (e) => {
    e.preventDefault();
    
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };

    onNewTodo(newTodo);
  };

  return (
    <>
      <form onSubmit={onNewSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
