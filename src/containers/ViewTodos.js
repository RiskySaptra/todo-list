import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const ViewTodos = ({ todos }) => {
  return <TodoList todos={todos} />;
};

const mapStateToProps = function (state) {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(ViewTodos);
