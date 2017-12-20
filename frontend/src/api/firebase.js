import * as firebase from 'firebase';
import config from '../config/firebase';

export const firebaseDatabase = firebase.initializeApp(config).database();

export const trelloBoard = firebaseDatabase.ref('/trello/board');
export const trelloCard = firebaseDatabase.ref('/trello/card');
