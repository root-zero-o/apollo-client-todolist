import React from "react";

const TodoItem = () => {
  return (
    <div className="w-full border-2 flex justify-around py-4 rounded-xl hover:border-black transition-all">
      <span>밀크티 사러 가기</span>
      <input type="checkbox" className="w-6" />
    </div>
  );
};

export default TodoItem;
