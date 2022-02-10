import React from 'react';
import { mount } from 'enzyme';
import {
  findByTestAttr,
  storeFactory,
  checkProps
} from 'test/testUtils';
import { Provider } from 'react-redux';
import { INITIAL_CITIES_ARRAY} from 'utils/constants';
import SearchBar from './';

const mockSetNewCity = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetNewCity],
}));

const defaultProps = {
  cities: INITIAL_CITIES_ARRAY,
};

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
};

describe('<SearchBar/>', () => {
  test('Does not throw warning with expected props', () => {
    checkProps(SearchBar, defaultProps);
  });

  describe('Rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    test('Input box displays', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });
    test('Submit button displays', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });

  describe('State controlled input field', () => {
    let wrapper;

    beforeEach(() => {
      mockSetNewCity.mockClear();
      React.useState = () => ['', mockSetNewCity];
      wrapper = setup();
    });
    test('State updates with value of input box upon change', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      const mockEvent = { target: { value: 'Barcelona' } };

      inputBox.simulate('change', mockEvent);
      expect(mockSetNewCity).toHaveBeenCalledWith('Barcelona');
    });
    test('Field is cleared upon submit button click', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      const mockEvent = { target: { value: 'Barcelona' } };

      inputBox.simulate('change', mockEvent);
      expect(mockSetNewCity).toHaveBeenCalledWith('Barcelona');
    });
  });
});
