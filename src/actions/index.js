export const initTodos = (data) => {
  return {
    type: "FETCH_TODO",
    data,
  };
};

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    ...data,
  };
};

export const updateTodo = (text) => {
  return {
    type: "UPDATE_TODO",
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
