import {
  CREATE_BOARD_SUCCESS,
  READ_BOARD_SUCCESS,
  UPDATE_BOARD_SUCCESS,
  DELETE_BOARD_SUCCESS,
} from '../actions/Board';

// Reducer
const boardReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_BOARD_SUCCESS:
      return {
        name: action.payload.name,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
      };
    case READ_BOARD_SUCCESS:
      return state;
    case UPDATE_BOARD_SUCCESS:
      return state;
    case DELETE_BOARD_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default boardReducer;
