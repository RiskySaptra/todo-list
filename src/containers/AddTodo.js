import React from "react";

const AddTodo = ({ showModal, setShowModal }) => {
  return (
    <div>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => setShowModal(!showModal)}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
