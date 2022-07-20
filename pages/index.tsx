import React from "react";
import TodoContainer from "../components/TodoContainer";
import TodoForm from "../components/Todoform";

const index = () => {
  return (
    <div className="font-serif w-screen h-screen bg-gray-400 flex justify-center items-center">
      <div className="w-1/2 h-3/4 bg-white rounded-xl shadow-lg flex flex-col items-center py-10">
        <h1 className="text-5xl">To do list</h1>
        <h2 className="text-2xl">with Apollo Client</h2>
        <TodoForm />
        <TodoContainer />
      </div>
    </div>
  );
};

export default index;
