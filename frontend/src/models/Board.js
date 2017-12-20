import { Record } from 'immutable';

export const Board = new Record({
  id: null,
  name: null,
  createdAt: null,
  updatedAt: null,
  cards: [],
});

export default Board;
