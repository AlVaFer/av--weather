import { INITIAL_CITIES_ARRAY } from 'utils/constants';
import { actionTypes } from '../types/types';

/**
 * @function citiesReducer
 * @param {array} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {array} - New state (cities payload from action).
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_CITIES_ARRAY, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CITIES:
      return action.payload;
    case actionTypes.ADD_CITY:
      return [action.payload, ...state];
    case actionTypes.DELETE_CITY:
      return [...state.filter((city) => city !== action.payload)];
    default:
      return state;
  }
};

