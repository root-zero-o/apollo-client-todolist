import React from "react";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  return (
    <div className="w-5/6 space-y-4 mt-8">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoContainer;
