import { FirebaseList } from '../api';
import * as BoardActions from '../actions/boards';
import { Board } from './Board';

export const Boards = new FirebaseList({
  onCreate: BoardActions.createBoardsSuccess,
  onRead: BoardActions.readBoardsSuccess,
  onUpdate: BoardActions.updateBoardsSuccess,
  onDelete: BoardActions.deleteBoardsSuccess,
}, Board);

export default Boards;
