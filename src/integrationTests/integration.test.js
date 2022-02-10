import { storeFactory } from 'test/testUtils';
import {
  getAllCities,
  deleteCity,
  setActiveCity,
  setCurrentIndex,
  requestCityByName,
} from 'store/actions';
import {
  INITIAL_CITIES_ARRAY,
  INITIAL_CITIES,
  MOCK_ACTIVE_CITY,
  MOCK_NEW_CITY,
} from 'utils/constants';
import * as helpers from 'helpers'; 

const mockGetIdsJoined = jest.spyOn(helpers, 'getIdsJoined');

describe('Integration tests', () => {
  let store;
  const initialState = {
    activeCity: {},
    cities: INITIAL_CITIES_ARRAY,
    currentIndex: -1,
  };

  beforeEach(() => {
    jest.resetAllMocks();
    store = storeFactory(initialState);
  });

  describe('deleteCity action dispatcher', () => {
    const inexistentCity = { unknown: 'unknown' };
    const citiesWithOneDeletedCity = INITIAL_CITIES_ARRAY.filter(
      city => city !== MOCK_ACTIVE_CITY
    );
    const stateWithOneDeletedCity = {
      ...initialState,
      cities: citiesWithOneDeletedCity,
    };

    test('Updates state correctly using deleteCity', () => {
      store.dispatch(deleteCity(MOCK_ACTIVE_CITY));
      const newState = store.getState();
      expect(newState).toEqual(stateWithOneDeletedCity);
    });

    test('When city does not exists returns properly state', () => {
      const citiesWithOneDeletedCity = INITIAL_CITIES_ARRAY.filter(
        city => city !== inexistentCity
      );
      const stateWithIncorrectDeletedCity = {
        ...initialState,
        cities: citiesWithOneDeletedCity,
      };
      store.dispatch(deleteCity(inexistentCity));
      const newState = store.getState();
      expect(newState).toEqual(stateWithIncorrectDeletedCity);
    });
  });

  describe('getAllCities action dispatcher', () => {
    beforeEach(() => {
      mockGetIdsJoined.mockReturnValue(INITIAL_CITIES);
    });

    test('Gets cities state properly using getAllCities', () => {
      store.dispatch(getAllCities());
      const newState = store.getState();
      expect(newState).toEqual(initialState);
    });
  });

  describe('requestCityByName action dispatcher', () => {
    jest.clearAllMocks();
    const stateWithOneAddedCity = {
      ...initialState,
      cities: [...INITIAL_CITIES_ARRAY],
    };

    store = storeFactory(initialState);
    test('Gets cities state properly using requestCityByName', () => {
      store.dispatch(requestCityByName(MOCK_NEW_CITY, ...INITIAL_CITIES_ARRAY));
      const newState = store.getState();
      expect(newState).toStrictEqual(stateWithOneAddedCity);
    });
  });

  describe('setActiveCity action dispatcher', () => {
    const stateWithActiveCity = {
      ...initialState,
      activeCity: MOCK_ACTIVE_CITY,
    };

    test('Gets cities state properly using setActiveCity', () => {
      store.dispatch(setActiveCity(MOCK_ACTIVE_CITY));
      const newState = store.getState();
      expect(newState).toEqual(stateWithActiveCity);
    });
  });

  describe('setCurrentIndex action dispatcher', () => {
    const stateWithCurrentIndex = {
      ...initialState,
      currentIndex: 3,
    };

    test('Gets cities state properly using setCurrentIndex', () => {
      store.dispatch(setCurrentIndex(3));
      const newState = store.getState();
      expect(newState).toEqual(stateWithCurrentIndex);
    });
  });
});
