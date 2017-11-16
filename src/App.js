import React, { Component } from 'react';

const passwordIsValid = (password, pattern) => {
  return true; // fonction de comparaison de pattern
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      [event.key]: event.value
      passwordIsValid = passwordIsValid(password),
      confirmPasswordIsValid = passwordIsValid(confirmPassword);
    });
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="passsword" onChange={ this.handleChange } />
        <input type="text" placeholder="confirmPassword" onChange={ this.handleChange } />
      </form>
    );
  } 
  
}

export default App;
