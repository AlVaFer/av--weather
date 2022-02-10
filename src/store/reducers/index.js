import { combineReducers } from 'redux';

import cities from './citiesReducer';
import currentIndex from './currentIndexReducer';
import activeCity from './activeCityReducer';

export default combineReducers({
  cities,
  currentIndex,
  activeCity,
});
