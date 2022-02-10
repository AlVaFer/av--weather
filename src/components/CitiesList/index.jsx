
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setActiveCity, setCurrentIndex } from 'store/actions';
import City from './children/City';

const CitiesList = ({ cities, currentIndex }) => {
  const dispatch = useDispatch();
  const citySelectedDispatches = (item, index) => {
    dispatch(setActiveCity(item));
    dispatch(setCurrentIndex(index));
  };

  return (
    <table className="cities" data-test="cities-list">
      <tbody>
        {cities.length > 0
          ? cities.map((city, index) => (
              <City
                key={index}
                active={index === currentIndex}
                city={city}
                onClick={() => citySelectedDispatches(city, index)}
                data-test="city"
              />
            ))
          : null}
      </tbody>
    </table>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      sys: PropTypes.object,
      weather: PropTypes.array,
      main: PropTypes.object,
      visibility: PropTypes.number,
      wind: PropTypes.object,
      clouds: PropTypes.object,
      dt: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentIndex: PropTypes.number,
};

export default CitiesList;
