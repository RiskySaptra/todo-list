import React, { useState } from "react";
import DetailModal from "./DetailModal";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

const Todo = ({ dispatch, id, title, description, status, createdAt }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatchData = () => {
    return dispatch(deleteTodo(id));
  };
  return (
    <>
      <li
        onClick={() => setShowModal(!showModal)}
        style={{
          textDecoration: status === 1 ? "line-through" : "none",
        }}
      >
        {title}
        {status === 0 && (
          <span className="inline ml-2">
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={dispatchData}
            >
              Delete
            </button>
          </span>
        )}
      </li>
      <DetailModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={{ title, description, createdAt, status }}
      />
    </>
  );
};

export default connect()(Todo);
