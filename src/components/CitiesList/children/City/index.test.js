import React from 'react';
import { shallow } from 'enzyme';
import {
  MOCK_ACTIVE_CITY,
} from 'utils/constants';
import City from '.';
import { findByTestAttr, checkProps } from 'test/testUtils.js';

const mockOnClick = jest.fn(); 

const defaultProps = {
  onClick: mockOnClick,
  city: MOCK_ACTIVE_CITY,
  active: true
};

/**
 * Create wrapper with specified initial conditions,
 * then submit a city
 # @function
 *
 * @param {object} state - Initial conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */
 const setup = props => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<City {...setupProps } />)
};


describe('<City/>', () => {
  test('Does not throw warning with expected props', () => {
    checkProps(City, defaultProps);
  });

  describe('Rendering', () => {
    const propsWithNoCity = {  onClick: mockOnClick, city: {}, active: false };
    beforeEach(() => {
      jest.resetAllMocks();
    });

    test('Renders without error when receives city', () => {
      const component = shallow(<City {...defaultProps}/>);
      expect(component).toBeDefined();
    });
    test('No error when no city', () => {
      const component = shallow(<City {...propsWithNoCity} />);
      expect(component).toBeDefined();
    });
    test('Does not render row when no city', () => {
      const wrapper = setup(propsWithNoCity);
      const component = findByTestAttr(wrapper, 'city');
      expect(component).toHaveLength(0);
    });
  });

  describe('Class when active', () => {
    let wrapper;
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = setup();
    });

    test('When active true contains properly class', () => {
      wrapper = setup();
      const component = findByTestAttr(wrapper, 'city');
      expect(component.find('tr').prop('className')).toContain('active');
    });
    test('When active false contains properly class', () => {
      wrapper = setup({ active: false });
      const component = findByTestAttr(wrapper, 'city');
      expect(component.find('tr').prop('className')).not.toContain(
        'active'
      );
    });
  });
});
