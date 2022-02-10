import React from 'react';
import PropTypes from 'prop-types';

const City = ({ onClick, city, active }) => {
  const hasCity = Object.keys(city).length > 0;

  const currentCity = hasCity && {
    name: city.name,
    maxTemp: Math.round(city.main.temp_max),
    iconClass: `wi owm-${city.weather[0].icon}`,
  };
  return hasCity ? (
    <tr
      className={`${active ? 'active' : ''}`}
      onClick={onClick}
      data-test="city"
    ><td>{currentCity.name}</td><td>{currentCity.maxTemp}°C</td>
    <td><i className={currentCity.iconClass} alt="weather status icon"></i></td>
    </tr>
  ) : null;
};

City.propTypes = {
  onClick: PropTypes.func.isRequired,
  city: PropTypes.shape({
    sys: PropTypes.object,
    weather: PropTypes.array,
    main: PropTypes.object,
    visibility: PropTypes.number,
    wind: PropTypes.object,
    clouds: PropTypes.object,
    dt: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  active: PropTypes.bool.isRequired,
};

export default City;
