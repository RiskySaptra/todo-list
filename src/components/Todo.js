import React, { useState } from "react";
import DetailModal from "./DetailModal";

const Todo = ({ id, title, description, status, createdAt }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal, id, "test");
  return (
    <>
      <li
        onClick={() => setShowModal(!showModal)}
        style={{
          textDecoration: status === 1 ? "line-through" : "none",
        }}
      >
        {title}
      </li>
      <DetailModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={{ title, description, createdAt, status }}
      />
    </>
  );
};

export default Todo;
