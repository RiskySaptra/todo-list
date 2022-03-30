import React from "react";
import Todo from "./Todo";

const DoneComponent = ({ todos }) => {
  todos = todos.sort(
    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
  );
  return (
    <ul className="list-disc">
      {todos.map((todo, idx) => (
        <div key={idx}>{todo.status === 1 && <Todo {...todo} />}</div>
      ))}
    </ul>
  );
};

const OngoingComponent = ({ todos }) => {
  todos = todos.sort(
    (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
  );
  return (
    <ul className="list-disc">
      {todos.map((todo, idx) => (
        <div key={idx}>{todo.status === 0 && <Todo {...todo} />}</div>
      ))}
    </ul>
  );
};

const TodoList = ({ todos }) => {
  if (todos.length < 1) return <h1>loading</h1>;
  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        <h3>Task Done:</h3>
        <DoneComponent todos={todos} />
      </div>
      <div className="basis-1/2">
        <h3>Task Ongoing:</h3>
        <OngoingComponent todos={todos} />
      </div>
    </div>
  );
};

export default TodoList;
