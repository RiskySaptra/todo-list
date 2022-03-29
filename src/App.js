import { useEffect, useState } from "react";
import AddTodo from "./containers/AddTodo";
import ViewTodos from "./containers/ViewTodos";
import "./index.css";

import { connect } from "react-redux";
import { initTodos } from "./actions";
import Modal from "./components/Modal";

function App({ dispatch }) {
  const [showModal, setShowModal] = useState(false);

  const fetchTodos = async () => {
    const response = await fetch(
      "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
    );
    return await response.json();
  };

  useEffect(() => {
    const dispatchData = async () => {
      const data = await fetchTodos();
      return dispatch(initTodos(data));
    };
    dispatchData();
  }, []);
  return (
    <div className="container mx-auto p-2">
      <AddTodo showModal={showModal} setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ViewTodos />
    </div>
  );
}

export default connect()(App);
