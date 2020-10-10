import React, { Component } from 'react';

class AddCases extends Component {
  constructor(props) {
    super(props);
    this.cityNameInput = React.createRef();
    this.casesInput = React.createRef();
  }
  render() {
    return (
      <div>
        City: <input type="text" ref={this.cityNameInput} />
        <br/>
        Cases to add / subtract: <input type="number" ref={this.casesInput}/>
        <br/>
        <button onClick={this.handleAddCases}>Submit</button>
      </div>
    );
  }
}

export default AddCases;