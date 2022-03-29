const todos = (state = [], action) => {
  const newId = state.length > 1 ? state[state.length - 1].id : 0;
  switch (action.type) {
    case "FETCH_TODO":
      return [...state, ...action.data];
    case "ADD_TODO":
      return [
        ...state,
        {
          id: newId + 1,
          title: action.title,
          description: action.description,
          status: 0,
          createdAt: action.createdAt,
        },
      ];
    case "UPDATE_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "DELETE_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default todos;
