import React, { Component } from 'react';
import { TweenLite } from 'gsap';

const getElements = items => (
  items.map((item, key) => (
    <li key={item}>Element {key}</li>
  ))
);

class UISideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // console.log(this.sidebar);

    TweenLite.to(this.sidebar, 1, {
      width: this.state.isOpen ? '0px' : '300px',
      opacity: this.state.isOpen ? '0' : '1',
      onComplete: () => { console.log('Hello'); },
    });

    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const styles = {
      view: {
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#050505',
        height: '100%',
        width: this.props.width,
        opacity: '1',
      },
    };

    return (
      <div
        ref={(ref) => { this.sidebar = ref; }}
        style={{ ...styles.view }}
      >
        <h1>Workaholic</h1>
        <button
          onClick={this.toggle}
        >
          Hide
        </button>
        <hr />
        <ul>
          {getElements(['a', 'b', 'c'])}
        </ul>
      </div>
    );
  }
}

export default UISideBar;
