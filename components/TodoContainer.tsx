import { useReactiveVar } from "@apollo/client";
import React from "react";
import todoVar, { Todo } from "../store/todo";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  // useReactiveVar를 사용해 직접 반응 변수에서 상태를 가져올 수 있다.
  // cache에 정의를 하지 않아도 되고, 쿼리를 작성하지 않아도 된다.
  // useQuery를 사용하면 Todo 데이터가 변경될 때마다 Todo 데이터를 사용하는 모든 쿼리가 트리거된다.
  // 하지만 useReactiveVar를 사용하면 독립적이다.
  const todos = useReactiveVar(todoVar);

  return (
    <div className="w-5/6 space-y-4 mt-8">
      {todos.map((todo, idx) => {
        return (
          <TodoItem
            key={idx}
            id={todo.id}
            content={todo.content}
            done={todo.done}
          />
        );
      })}
    </div>
  );
};

export default TodoContainer;
