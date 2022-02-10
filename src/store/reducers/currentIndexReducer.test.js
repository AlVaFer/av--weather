import { MOCK_ACTIVE_CITY } from 'utils/constants';
import { actionTypes } from '../types/types';
import currentIndexReducer from './currentIndexReducer';

describe('currentIndexReducer', () => {
  test('When previous state is undefined, returns object', () => {
    const newState = currentIndexReducer(undefined, MOCK_ACTIVE_CITY);
    expect(newState).toStrictEqual(-1);
  });

  test('Return previous state when unknown action type', () => {
    const newState = currentIndexReducer({'ps':'previousState'}, { MOCK_ACTIVE_CITY });
    expect(newState).toStrictEqual({'ps': 'previousState'});
  });

  describe('SET_CURRENT_INDEX', () => {
    test('Return true for action type SET_CURRENT_INDEX', () => {
      const newState = currentIndexReducer(false, {
        type: actionTypes.SET_CURRENT_INDEX,
        payload: 'payload',
      });
      expect(newState).toBe('payload');
    });
  });
});