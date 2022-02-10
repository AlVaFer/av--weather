import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { requestCityByName } from 'store/actions';

const SearchBar = ({ cities }) => {
  const [requestedCity, setNewCity] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="search-form" data-test="component-input">
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar ciudad"
            value={requestedCity}
            onChange={(event) => setNewCity(event.target.value)}
            data-test="input-box"
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                await dispatch(requestCityByName(requestedCity, cities));
                setNewCity('');
              }}
              data-test="submit-button"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
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
    })
  ),
};

export default SearchBar;
