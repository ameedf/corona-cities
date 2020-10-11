import React, { Component } from 'react';
import AddCases from './AddCases';
import CasesPerCityList from './CasesPerCityList';
import Statistics from './Statistics';

class CitiesPage extends Component {
  state = { cities: [] }

  handleAddCases(cityName, cases) {
    let newList = [...this.state.cities];
    const city = newList.find(c => c.name === cityName);
    if (city) {
      city.cases += cases;
    } else {
      const newRecord = {
        name: cityName,
        cases: cases
      };
      newList.push(newRecord);
    }
    newList = newList.sort((c1, c2) => c2.cases - c1.cases);
    this.setState({ cities: newList })
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <AddCases addCityData={(cityName, cases) => this.handleAddCases(cityName, cases)} />
            </td>
          </tr>
          <tr>
            <td>
              {this.state.cities.length > 0 && <CasesPerCityList cities={this.state.cities} />}
            </td>
            <td>
              <Statistics cities={this.state.cities} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CitiesPage;