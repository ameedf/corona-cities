import React, { Component } from 'react';

class Statistics extends Component {
  numberOfGreenCities() {
    return this.props.cities.filter(c => c.cases <= 100).length;
  }

  numberOfYellowCities() {
    return this.props.cities.filter(c => c.cases <= 1000 && c.cases > 100).length;
  }

  numberOfRedCities() {
    return this.props.cities.filter(c => c.cases > 1000).length;
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "green" }}> Green: {this.numberOfGreenCities()}</div>
        <div style={{ backgroundColor: "yellow" }}>  Yellow: {this.numberOfYellowCities()} </div>
        <div style={{ backgroundColor: "red" }}> Red: {this.numberOfRedCities()} </div>
      </div>
    );
  }
}

export default Statistics;