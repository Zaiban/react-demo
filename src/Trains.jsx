/*
  Class based component
  Fetches and displays the data of all the trains of Finland from the Digitraffic API
*/

import React from 'react';

class Trains extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trains: [], // This will contain an array of trains
    }
  }
  // Async functions are an example of modern JavaScript (introducted in ES 2017)
  async fetchTrains() {
    // 'await' can only be used inside an 'async' function
    // it stops execution of the funtion until the data is returned from the remote source
    // this is needed because there is always some 'lag' when getting things over the internet,
    // so the result is not here instantly.
    const response = await fetch('https://rata.digitraffic.fi/api/v1/trains');
    return response.json();
  }
  async componentDidMount() {
    const trains = await this.fetchTrains();
    console.log('trains', trains)
    this.setState({ trains });
  }
  render() {
    return (
      <div>
        All trains:
        <br />
        <em style={{ fontSize: '8px', color: 'gray' }}>
          {this.state.trains.map(train => <div>{JSON.stringify(train)}</div>)}
        </em>
      </div>
    )
  }
}

export default Trains;
