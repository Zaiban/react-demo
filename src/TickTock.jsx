/*
  Class based component
  Renders a timer which increases by 1 every second
*/

import React from 'react';

class TickTock extends React.Component {
  ticker = null;
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
    }
  }
  tickTock() {
    this.setState({ timer: this.state.timer + 1 });
  }
  componentDidMount() {
    this.ticker = setInterval(() => {
      console.log('Tick');
      this.tickTock();
    }, 1000);
  }
  componentWillUnmount() {
    clearTimeout(this.ticker);
  }
  render() {
    return (
      <div>
        Timer is: {this.state.timer}
      </div>
    )
  }
}

export default TickTock;
