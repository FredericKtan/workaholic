import React, { Component } from 'react';
import moment from 'moment';
import { append } from 'ramda';
import { connect } from 'react-redux';

import { trelloBoard } from '../api/firebase';
import { createBoardSuccess } from '../actions/Board';
import { readBoardsSuccess } from '../actions/Boards';

const renderBoards = boards => (
  boards.map(board => (
    <li key={board.id}>{board.name}</li>
  ))
);

class TrelloPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBoardName: '',
      boards: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillMount() {
    // trelloBoard.on('child_added', (snapshot) => {
    //   const board = {
    //     name: snapshot.val().name,
    //     createdAt: snapshot.val().createdAt,
    //     updatedAt: snapshot.val().updatedAt,
    //     id: snapshot.key,
    //   };
    //   this.setState({
    //     boards: append(board, this.state.boards),
    //   });
    // });
    this.setState({
      boards: this.props.boards,
    });
  }

  handleOnChange(value) {
    this.setState({
      newBoardName: value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    // trelloBoard.push({
    //   name: this.state.newBoardName,
    //   createdAt: moment(new Date()).format('X'),
    //   updatedAt: moment(new Date()).format('X'),
    // });
    const newBoard = {
      name: this.state.newBoardName,
      createdAt: moment(new Date()).format('X'),
      updatedAt: moment(new Date()).format('X'),
    };
    this.props.dispatch(createBoardSuccess(newBoard));
    this.setState({
      newBoardName: '',
    });
  }

  render() {
    return (
      <div>
        <h1>
          Trello
        </h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onChange={event => this.handleOnChange(event.target.value)}
            value={this.state.newBoardName}
          />
          <input type="submit" value="New board" />
        </form>
        <ul>
          { renderBoards(this.state.boards) }
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);

  return state;
};

export default connect(mapStateToProps)(TrelloPage);
