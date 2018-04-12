/*
  Class based component
  Renders the Content of the application
*/

import React from 'react';

import Trains from './Trains';
import TickTock from './TickTock';

class Content extends React.Component {
  render() {
    return (
      <div style={{ minHeight: '10em' }}>
        <br />
        <h1>Hello React!</h1>
        <br />
        <TickTock />
        <br />
        <Trains />
      </div>
    )
  }
}

export default Content;
