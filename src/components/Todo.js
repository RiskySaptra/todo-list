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
      <div className="flex flex-row">
        <li
          onClick={() => setShowModal(!showModal)}
          style={{
            textDecoration: status === 1 ? "line-through" : "none",
          }}
        >
          <p className="hover:text-sky-700 cursor-pointer">{title}</p>
        </li>
        <div className="ml-2">
          {status === 0 && (
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={dispatchData}
            >
              Delete
            </button>
          )}
        </div>

        <DetailModal
          showModal={showModal}
          setShowModal={setShowModal}
          data={{ id, title, description, createdAt, status }}
        />
      </div>
    </>
  );
};

export default connect()(Todo);
