import Header from "../component/Header";
import TodoForms from "../component/forms";
import { useState, useEffect } from "react";
import TodoItem from "../component/TodoItem";
const Body = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(() => {
    const saveData = localStorage.getItem("todos");
    const initialData = JSON.parse(saveData);
    return initialData || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const onDelete = (id) => {
    const data = [...todos];

    const updatedData = data.filter((data) => data.id !== id);
    setTodos(updatedData);
  };

  return (
    <div className="w-auto h-screen sm:h-auto bg-white p-16 rounded shadow-2xl md:w-1/3 lg:w-1/2">
      <Header />
      <TodoForms
        setInputText={setInputText}
        inputText={inputText}
        handleSubmit={handleSubmit}
      />
      <div className="w-full flex-col justify-center items-center">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            handleChange={handleChange}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
