import { makeVar } from "@apollo/client";

export interface Todo {
  id: number;
  content: string;
  done: boolean;
}

// 반응 변수 만들기
// Apollo Client 캐시 외부에 로컬 상태를 저장하기 위해 사용된다.
const todoIdCounterVar = makeVar(0);
const todoVar = makeVar<Todo[]>([]);

// todo 추가하기

export const addTodo = (content: string) => {
  // 인자를 넣지 않고 호출하면 해당 반응 변수의 값이 변환된다.
  const prevId = todoIdCounterVar();
  const curTodo = todoVar();
  const newTodo = {
    id: prevId + 1,
    content,
    done: false,
  };
  // 인자를 넣고 호출하면 인자 값으로 반응 변수가 업데이트 된다.
  todoVar([...curTodo, newTodo]);
  todoIdCounterVar(prevId + 1);
};

// todo 삭제하기

export const deleteTodo = (id: number) => {
  const curTodo = [...todoVar()];
  const deleteIndex = curTodo.findIndex((todo) => todo.id === id);

  if (deleteIndex === -1) return;

  curTodo.splice(deleteIndex, 1);
  todoVar(curTodo);
};

// todo 업데이트 하기
export const updateTodo = ({ id, content, done }: Todo) => {
  const todos = [...todoVar()];

  const filteredTodos = todos.filter((todo) => todo.id !== id);

  let curTodo = todos.find((todo) => todo.id === id);
  curTodo = {
    id: id,
    content: content,
    done: !done,
  };
  const updatedTodos = [...filteredTodos, curTodo];
  todoVar(updatedTodos);
};

export default todoVar;
