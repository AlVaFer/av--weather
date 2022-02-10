import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from 'test/testUtils';

import CitiesList from '.';
import { INITIAL_CITIES_ARRAY} from 'utils/constants';
import { Provider } from 'react-redux';

const defaultProps = {
  cities: INITIAL_CITIES_ARRAY,
  currentIndex: -1,
};

const setup = (initialState = {}, cities = [], currentIndex = -1) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <CitiesList cities={cities} currentIndex={currentIndex} />
    </Provider>
  );
};

describe('<CitiesList/>', () => {
  test('Does not throw warning with expected props', () => {
    checkProps(CitiesList, defaultProps);
  });

  describe('If there are no cities', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    test('Renders without error', () => {
      const component = findByTestAttr(wrapper, 'cities-list');
      expect(component.length).toBe(1);
    });
    test('Does not render any City', () => {
      const component = findByTestAttr(wrapper, 'cities-list');
      expect(component.find('City')).toHaveLength(0);
    });
  });

  describe('If there are cities', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({}, INITIAL_CITIES_ARRAY, -1);
    });
    test('Renders without error', () => {
      const component = findByTestAttr(wrapper, 'cities-list');
      expect(component.length).toBe(1);
    });
    test('Does render several cities', () => {
      const component = findByTestAttr(wrapper, 'cities-list');
      expect(component.find('City')).toHaveLength(11);
    });

    describe('activeIndex', () => {
      test('When activeIndex matches index, City has active true', () => {
        wrapper = setup({}, INITIAL_CITIES_ARRAY, 3);
        const component = findByTestAttr(wrapper, 'cities-list');
        expect(component.find('City').at(3).prop('active')).toBeTruthy();
      });
      
      test('When activeIndex does not matches index, City has active false', () => {
        wrapper = setup({}, INITIAL_CITIES_ARRAY, 3);
        const component = findByTestAttr(wrapper, 'cities-list');
        expect(component.find('City').at(2).prop('active')).toBeFalsy();
      });

      it('Should match with previous snapshot', () => {
        const store = storeFactory({});
        const component = shallow(
          <Provider store={store}><CitiesList {...defaultProps}/></Provider>
        );
        expect(component).toMatchSnapshot();
      });
    });
  });
});