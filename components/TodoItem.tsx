import React from "react";
import { deleteTodo, Todo, updateTodo } from "../store/todo";

const TodoItem = ({ id, content, done }: Todo) => {
  const removeTodo = () => {
    alert("삭제 완료!");
    deleteTodo(id);
  };

  const checkboxHandler = () => {
    alert("업데이트 완료!");
    updateTodo({ id, content, done });
  };
  return (
    <div className="w-full border-2 flex justify-around items-center py-4 rounded-xl shadow-md hover:border-black transition-all">
      <span>{content}</span>
      <div className="h-full w-1/5 flex justify-evenly">
        {done ? (
          <input
            type="checkbox"
            className="w-5"
            defaultChecked
            onClick={checkboxHandler}
          />
        ) : (
          <input type="checkbox" className="w-5" onClick={checkboxHandler} />
        )}
        <button className="w-4 text-3xl" onClick={removeTodo}>
          🗑
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
