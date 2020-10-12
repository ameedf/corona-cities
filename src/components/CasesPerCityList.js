import React, { Component } from 'react';
import { connect } from 'react-redux';

class CasesPerCityList extends Component {
  cityRow(city, index) {
    let color = "green";
    if (city.cases > 1000) {
      color = "red";
    } else if (city.cases > 100) {
      color = "yellow";
    }
    const cityStyle = {
      backgroundColor: color
    }
    return (
      < tr key={index} >
        <td>{city.name}</td>
        <td style={cityStyle}>{city.cases}</td>
      </tr >);
  }
  render() {
    return (
      <div>
        <h1>Cities:</h1>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Cases</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cities.map((c, index) => this.cityRow(c, index))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities,
})

export default connect(mapStateToProps, null)(CasesPerCityList);