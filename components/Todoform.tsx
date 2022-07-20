import React, { useState } from "react";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <form className="border-b-2 py-8" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="to do"
        className="border-2 rounded-lg px-4 py-3 w-80 text-lg"
        onChange={onChange}
        value={input}
      />
      <button
        type="submit"
        className="bg-black text-white w-16 h-full rounded-lg ml-4"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
