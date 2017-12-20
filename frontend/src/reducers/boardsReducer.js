import {
  READ_BOARDS_SUCCESS,
} from '../actions/Boards';

// Default state (Temporary)
const defaultState = [
  {
    id: 1,
    name: 'Hello',
    createdAt: '123456',
    updatedAt: '123456',
  }, {
    id: 2,
    name: 'World',
    createdAt: '123456',
    updatedAt: '123456',
  }, {
    id: 3,
    name: 'You',
    createdAt: '123456',
    updatedAt: '123456',
  }, {
    id: 4,
    name: 'Are',
    createdAt: '123456',
    updatedAt: '123456',
  }, {
    id: 5,
    name: 'The',
    createdAt: '123456',
    updatedAt: '123456',
  }, {
    id: 6,
    name: 'Best',
    createdAt: '123456',
    updatedAt: '123456',
  },
];

// Reducer
const boardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case READ_BOARDS_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default boardsReducer;
