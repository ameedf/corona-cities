import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddCases extends Component {
  constructor(props) {
    super(props);
    this.cityNameInput = React.createRef();
    this.casesInput = React.createRef();
  }

  extractData() {
    const cityName = this.cityNameInput.current.value.toLowerCase();
    const cases = Number(this.casesInput.current.value);
    this.props.addCityData(cityName, cases);
  }

  render() {
    return (
      <div>
        City: <input type="text" ref={this.cityNameInput} />
        <br />
          Cases to add / subtract: <input type="number" ref={this.casesInput} />
        <br />
        <button onClick={() => this.extractData()}>Submit</button>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities,
})

const mapDispatchToProps = dispatch => {
  return {
    addCityData: (cityName, cases) => dispatch({
      type: "city/added",
      cityName: cityName,
      cases: cases
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCases);