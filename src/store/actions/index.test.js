import moxios from 'moxios';
import { storeFactory } from 'test/testUtils';
import {
  INITIAL_CITIES_ARRAY,
  INITIAL_CITIES,
  MOCK_ACTIVE_CITY,
  MOCK_NEW_CITY,
} from 'utils/constants';
import * as Helpers from 'helpers/';
import { getAllCities, requestCityByName } from './';

const mockGetIdsJoined = jest.spyOn(Helpers, 'getIdsJoined');

describe('getAllCities', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('getAllCities gets all cities', () => {
    mockGetIdsJoined.mockReturnValue(INITIAL_CITIES);
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: INITIAL_CITIES_ARRAY,
      });
    });

    return store.dispatch(getAllCities()).then(() => {
      const cities = store.getState().cities;
      expect(cities).toBe(INITIAL_CITIES_ARRAY);
    });
  });
});

describe('requestCityByName', () => {
  const citiesWithOneAdded = [MOCK_NEW_CITY, ...INITIAL_CITIES_ARRAY];
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('City is not in the list', () => {
    test('When city is not in the list requestCityByName adds a city', () => {
      const store = storeFactory();
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: MOCK_NEW_CITY,
        });
      });

      return store
        .dispatch(requestCityByName('Miami', INITIAL_CITIES_ARRAY))
        .then(() => {
          const cities = store.getState().cities;
          expect(cities).toStrictEqual(citiesWithOneAdded);
          const currentIndex = store.getState().currentIndex;
          expect(currentIndex).toEqual(0);
          const activeCity = store.getState().activeCity;
          expect(activeCity).toEqual(MOCK_NEW_CITY);
        });
    });
  });

  describe('City is in the list', () => {
    test('When city is in the list requestCityByName does not add a city', () => {
      const store = storeFactory();
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: MOCK_ACTIVE_CITY,
        });
      });

      return store
        .dispatch(requestCityByName('Barcelona', INITIAL_CITIES_ARRAY))
        .then(() => {
          const cities = store.getState().cities;
          expect(cities).toStrictEqual(INITIAL_CITIES_ARRAY);
          const currentIndex = store.getState().currentIndex;
          expect(currentIndex).toEqual(0);
        });
    });
  });

  describe('When error', () => {
    test('When error requestCityByName sets index to -2', () => {
      const store = storeFactory();
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: 'error',
        });
      });

      return store
        .dispatch(requestCityByName('Barcelona', INITIAL_CITIES_ARRAY))
        .then(() => {
          const cities = store.getState().currentIndex;
          expect(cities).toBe(-2);
        });
    });
  });
});

/* Rest of action creators tested in integrationTests/ */
