import { actionTypes } from '../types/types';

/**
 * @function activeCityReducer
 * @param {object} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {object} - New city (payload from action).
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_CITY:
      return action.payload;
    default:
      return state;
  }
};
