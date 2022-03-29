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
      return state.map((itm) => {
        if (itm.id !== action.id) {
          return itm;
        }
        itm.status = 1;
        return itm;
      });
    case "DELETE_TODO":
      return state.filter((itm) => itm.id !== action.id);
    default:
      return state;
  }
};

export default todos;
