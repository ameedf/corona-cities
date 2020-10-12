import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCases from './AddCases';
import CasesPerCityList from './CasesPerCityList';
import Statistics from './Statistics';

class CitiesPage extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <AddCases />
            </td>
          </tr>
          <tr>
            <td>
              {this.props.cities.length > 0 && <CasesPerCityList />}
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