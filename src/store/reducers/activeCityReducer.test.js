import { MOCK_ACTIVE_CITY } from 'utils/constants';
import { actionTypes } from '../types/types';
import activeCityReducer from './activeCityReducer';

describe('activeCityReducer', () => {
  test('When previous state is undefined, returns object', () => {
    const newState = activeCityReducer(undefined, MOCK_ACTIVE_CITY);
    expect(newState).toStrictEqual({});
  });

  test('Return previous state when unknown action type', () => {
    const newState = activeCityReducer({'ps':'previousState'}, { MOCK_ACTIVE_CITY });
    expect(newState).toStrictEqual({'ps': 'previousState'});
  });

  describe('SET_ACTIVE_CITY', () => {
    test('Return true for action type SET_ACTIVE_CITY', () => {
      const newState = activeCityReducer(false, {
        type: actionTypes.SET_ACTIVE_CITY,
        payload: 'payload',
      });
      expect(newState).toBe('payload');
    });
  });
});