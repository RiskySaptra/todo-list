import { useEffect, useState } from "react";
import ViewTodos from "./containers/ViewTodos";
import "./index.css";

import { connect } from "react-redux";
import { initTodos } from "./actions";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

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
    <>
      <Navbar showModal={showModal} setShowModal={setShowModal} />
      <div className="container mx-auto p-2">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <ViewTodos />
      </div>
    </>
  );
}

export default connect()(App);
