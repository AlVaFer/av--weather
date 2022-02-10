import { INITIAL_CITIES_ARRAY, MOCK_ACTIVE_CITY } from 'utils/constants';
import { actionTypes } from '../types/types';
import citiesReducer from './citiesReducer';

describe('citiesReducer', () => {
  test('When previous state is undefined, return false', () => {
    const newState = citiesReducer(undefined, {});
    expect(newState).toBe(INITIAL_CITIES_ARRAY);
  });

  test('Return previous state when unknown action type', () => {
    const newState = citiesReducer(false, { type: 'unknown' });
    expect(newState).toBe(false);
  });

  describe('GET_ALL_CITIES', () => {
    test('Return payload for action type GET_ALL_CITIES', () => {
      const newState = citiesReducer(false, {
        type: actionTypes.GET_ALL_CITIES,
        payload: 'payload',
      });
      expect(newState).toBe('payload');
    });
  });

  describe('ADD_CITY', () => {
    const stateWithNewCity = [MOCK_ACTIVE_CITY, ...INITIAL_CITIES_ARRAY];

    test('Add new city to previous state', () => {
      const newState = citiesReducer(INITIAL_CITIES_ARRAY, {
        type: actionTypes.ADD_CITY,
        payload: MOCK_ACTIVE_CITY,
      });
      expect(newState).toStrictEqual(stateWithNewCity);
    });

    test('Return previous state when unknown action type', () => {
      const newState = citiesReducer(INITIAL_CITIES_ARRAY, {
        type: 'unknown',
        payload: MOCK_ACTIVE_CITY,
      });
      expect(newState).toBe(INITIAL_CITIES_ARRAY);
    });
  });

  describe('DELETE_CITY', () => {
    const stateWithActiveCityDeleted = [
      ...INITIAL_CITIES_ARRAY.filter((city) => city !== MOCK_ACTIVE_CITY),
    ];

    test('Delete active city from the state', () => {
      const newState = citiesReducer(INITIAL_CITIES_ARRAY, {
        type: actionTypes.DELETE_CITY,
        payload: MOCK_ACTIVE_CITY,
      });
      expect(newState).toStrictEqual(stateWithActiveCityDeleted);
    });

    test('Return previous state when unknown action type', () => {
      const newState = citiesReducer(INITIAL_CITIES_ARRAY, {
        type: 'unknown',
        payload: MOCK_ACTIVE_CITY,
      });
      expect(newState).toStrictEqual(INITIAL_CITIES_ARRAY);
    });
  });
});