// Modules
import moment from 'moment';
import firebase from '../api/firebase';

const dateToTimestamp = () => moment(new Date()).format('X');

const addMessageToFirebase = (text) => {
  const itemsRef = firebase.database().ref('messages');
  const newDate = dateToTimestamp();

  const item = {
    createdAt: newDate,
    deletedAt: newDate,
    fromUserId: '1234567890',
    text,
    updatedAt: newDate,
  };

  itemsRef.push(item);
};

// Reducer
const messageReducer = (state = '', action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      addMessageToFirebase(action.text);

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
