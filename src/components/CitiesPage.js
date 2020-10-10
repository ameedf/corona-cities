import React, { Component } from 'react';
import AddCases from './AddCases';

class CitiesPage extends Component {
  constructor(props) {
    super(props);
    this.cityNameInput = React.createRef();
    this.casesInput = React.createRef();

    this.state = { cities: [] }
  }

  handleAddCases() {
    const cityName = this.cityNameInput.current.value.toLowerCase();
    const cases = Number(this.casesInput.current.value);

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

  numberOfGreenCities() {
    return this.state.cities.filter(c => c.cases <= 100).length;
  }

  numberOfYellowCities() {
    return this.state.cities.filter(c => c.cases <= 1000 && c.cases > 100).length;
  }

  numberOfRedCities() {
    return this.state.cities.filter(c => c.cases > 1000).length;
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              {/* <AddCases /> */}
              <div>
                City: <input type="text" ref={this.cityNameInput} />
                <br />
          Cases to add / subtract: <input type="number" ref={this.casesInput} />
                <br />
                <button onClick={() => this.handleAddCases()}>Submit</button>
                <hr />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              {/* <CasesPerCityList /> */}
              {this.state.cities.length > 0 &&
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
                      {this.state.cities.map((c, index) => this.cityRow(c, index))}
                    </tbody>
                  </table>
                </div>
              }
            </td>
            <td>
              <div>
                {/* <Statistics /> */}
                <div style={{ backgroundColor: "green" }}> Green: {this.numberOfGreenCities()}</div>
                <div style={{ backgroundColor: "yellow" }}>  Yellow: {this.numberOfYellowCities()} </div>
                <div style={{ backgroundColor: "red" }}> Red: {this.numberOfRedCities()} </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CitiesPage;