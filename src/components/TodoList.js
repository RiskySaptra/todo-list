import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  if (todos.length < 1) return <h1>loading</h1>;
  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        <h3>Done</h3>
        <ul className="list-disc">
          {todos.map((todo) => (
            <>{todo.status === 1 && <Todo key={todo.id} {...todo} />}</>
          ))}
        </ul>
      </div>
      <div className="basis-1/2">
        <h3>Ongoing</h3>
        <ul className="list-disc">
          {todos.map((todo) => (
            <>{todo.status === 0 && <Todo key={todo.id} {...todo} />}</>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
