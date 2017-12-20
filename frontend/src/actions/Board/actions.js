import {
  CREATE_BOARD_SUCCESS,
  READ_BOARD_SUCCESS,
  UPDATE_BOARD_SUCCESS,
  DELETE_BOARD_SUCCESS,
} from './types';

export const createBoardSuccess = board => ({
  type: CREATE_BOARD_SUCCESS,
  payload: board,
});

export const readBoardSuccess = () => ({
  type: READ_BOARD_SUCCESS,
});

export const updateBoardSuccess = () => ({
  type: UPDATE_BOARD_SUCCESS,
});

export const deleteBoardSuccess = () => ({
  type: DELETE_BOARD_SUCCESS,
});
