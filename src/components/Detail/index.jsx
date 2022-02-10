import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteCity, setActiveCity, setCurrentIndex } from 'store/actions';

const Detail = ({ activeCity, currentIndex }) => {
  const hasActiveCity = Object.keys(activeCity).length > 0 && currentIndex > -1;
  const dispatch = useDispatch();

  async function dispatchesBtnDelete(activeCity) {
    await dispatch(deleteCity(activeCity));
    await dispatch(setCurrentIndex(-1));
    dispatch(setActiveCity({}));
  }

  const errorAlert =
    currentIndex < -1 ? (
      <div id="detail-error" data-test="error">
        <p>No hay resultados de búsqueda disponibles</p>
      </div>
    ) : (
      ''
    );

  const city = hasActiveCity && {
    name: activeCity.name,
    maxTemp: Math.round(activeCity.main.temp_max),
    minTemp: Math.round(activeCity.main.temp_min),
    iconClass: `wi owm-${activeCity.weather[0].icon}`,
    description: activeCity.weather[0].description,
    windSpeed: activeCity.wind.speed,
    humidity: activeCity.main.humidity,
    pressure: activeCity.main.pressure,
  };

  return (
    <div className="detail-container" data-test="detail-container">
      {hasActiveCity ? (
        <div className="detail" data-test="active">
          <form>
            <h4 data-test="name">
              {city.name}, {city.maxTemp}°C
            </h4>
            <i className={city.iconClass} alt="weather status icon"></i>
            <sub>{city.description}</sub>

            <div className="data">
              <p>
                {' '}
                <label>Min.</label>
                {city.minTemp}°C{' / '}
                <label>Máx.{city.maxTemp}°C</label>{' '}
              </p>

              <p>
                <label>Viento:</label> {city.windSpeed} m/s
              </p>
              <p>
                <label>Humedad:</label> {city.humidity}%
              </p>
              <p>
                <label>Presión Atm.:</label> {city.pressure}hPa
              </p>

              <i
                className={`${city.iconClass} detail-img-bkg`}
                alt="weather status icon"
              ></i>

              <button
                className="btn-detail"
                onClick={evt => {
                  evt.preventDefault();
                  dispatchesBtnDelete(activeCity);
                }}
                data-test="submit-button"
              >
                Eliminar
              </button>
            </div>
          </form>
        </div>
      ) : (
        errorAlert
      )}
    </div>
  );
};

Detail.propTypes = {
  activeCity: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    main: PropTypes.object,
    wind: PropTypes.object,
    name: PropTypes.string,
  }),
};

export default Detail;
