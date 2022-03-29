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

export const updateTodo = (id) => {
  return {
    type: "UPDATE_TODO",
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
