// Module
import { v4 } from 'uuid';

// Actions
export const createMessage = text => ({
  type: 'CREATE_MESSAGE',
  text,
  id: v4(),
});

export const readMessage = response => ({
  type: 'READ_MESSAGE',
  response,
});

export const updateMessage = (id, text) => ({
  type: 'UPDATE_MESSAGE',
  id,
  text,
});

export const deleteMessage = id => ({
  type: 'DELETE_MESSAGE',
  id,
});
