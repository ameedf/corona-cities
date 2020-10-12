import { CITY_ADDED } from './actions';

const initialState = {
  cities: [],
}

export function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case CITY_ADDED:
      let newList = state.cities.map(c => ({ ...c }));
      const city = newList.find(c => c.name === action.cityName);
      if (city) {
        city.cases += action.cases;
      } else {
        const newRecord = {
          name: action.cityName,
          cases: action.cases
        };
        newList.push(newRecord);
      }
      newList = newList.sort((c1, c2) => c2.cases - c1.cases);
      return { cities: newList };
    default:
      return state;
  }
}
