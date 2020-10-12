import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCity from './AddCity';
import CasesPerCityList from './CasesPerCityList';
import Statistics from './Statistics';

class CitiesPage extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <AddCity />
            </td>
          </tr>
          <tr>
            <td>
              {this.props.cities.length > 0 && <CasesPerCityList />}
              {this.props.cities.length === 0 && <h1>No cities added yet</h1>}
            </td>
            <td>
              <Statistics />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities,
})

export default connect(mapStateToProps, null)(CitiesPage);