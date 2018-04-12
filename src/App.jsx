/*
  Class based component
  Renders the base of the application
*/

import React from 'react';

import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
