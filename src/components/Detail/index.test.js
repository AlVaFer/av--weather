import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from 'test/testUtils.js';
import { MOCK_ACTIVE_CITY, INITIAL_CITIES_ARRAY } from 'utils/constants';
import { Provider } from 'react-redux';
import Detail from './';

jest.mock('store/actions');

const defaultProps = {
  activeCity: MOCK_ACTIVE_CITY,
  currentIndex: -1,
};

const initialState = {
  activeCity: {},
  cities: INITIAL_CITIES_ARRAY,
  currentIndex: -1,
};

/**
 * Create wrapper with specified initial conditions,
 * then submit a city
 # @function
 *
 * @param {Object} state - Initial conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */
const setup = (initialState = {}, activeCity = {}, currentIndex = -1) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Detail activeCity={activeCity} currentIndex={currentIndex} />
    </Provider>
  );
};

describe('<Detail/>', () => {
  test('Does not throw warning with expected props', () => {
    checkProps(Detail, defaultProps);
  });

  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('Renders without error when receives void object', () => {
    const component = findByTestAttr(wrapper, 'detail-container');
    expect(component.length).toBe(1);
  });
  test('Renders when receives active object and index>=0', () => {
    wrapper = setup(initialState, MOCK_ACTIVE_CITY, 0);
    const component = findByTestAttr(wrapper, 'active');
    expect(component.length).toBe(1);
    const name = findByTestAttr(wrapper, 'name');
    expect(name.length).toBe(1);
  });

  test('Renders error alert when receives active false and index=-2', () => {
    wrapper = setup(initialState, MOCK_ACTIVE_CITY, -2);
    const component = findByTestAttr(wrapper, 'error');
    expect(component.length).toBe(1);
    const active = findByTestAttr(wrapper, 'active');
    expect(active.length).toBe(0);
    expect(component.text()).toBe('No hay resultados de búsqueda disponibles');
  });

  test('void when receives active false and index=-1', () => {
    wrapper = setup(initialState, MOCK_ACTIVE_CITY, -1);
    const component = findByTestAttr(wrapper, 'error');
    expect(component).toEqual({});
  });
});
