import { actionTypes } from '../types/types';

/**
 * @function currentIndexReducer
 * @param {number} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {number} - New index (payload from action).
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = -1, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_INDEX:
      return action.payload;
    default:
      return state;
  }
};
