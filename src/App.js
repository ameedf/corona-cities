import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CitiesPage from './components/CitiesPage';
import { applicationStore } from './data/applicationStore';

function App() {
  return (
    <Provider store={applicationStore}>
      <div className="App">
        <CitiesPage />
      </div>
    </Provider>
  );
}

export default App;
