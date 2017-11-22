// Reducer
const messageReducer = (state = '', action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      return {
        id: action.id,
        text: action.text,
      };
    case 'READ_MESSAGE':
      return state;
    case 'UPDATE_MESSAGE':
      return state;
    case 'DELETE_MESSAGE':
      return state;
    default:
      return state;
  }
};

export default messageReducer;
