import axios from 'axios';
import { getIdsJoined } from 'helpers';
import { API_KEY_AND_UNITS, AXIOS_BASE_URL } from 'utils/constants/axios';
import { actionTypes } from '../types/types';

/**
 * Returns Redux Thunk function that dispatches GET_ALL_CITIES action
 * @function getAllCities
 * @param {String} cities - List of cities
 * @returns {Function} - Redux Thunk function.
*/
  export const getAllCities = cities => {
    return function(dispatch) {
      const joinedList = getIdsJoined(cities);
      return axios.get(`${AXIOS_BASE_URL}group?${API_KEY_AND_UNITS}&id=${joinedList}`)
        .then(response => {
          dispatch({
            type: actionTypes.GET_ALL_CITIES,
            payload: response.data.list
          }) })
        .catch((e) => {
          console.log('Error', e);
        });
      }
    };

/**
 * Returns Redux Thunk function that conditionally dispatches the actions
 * ADD_CITY, SET_CURRENT_INDEX, SET_ACTIVE_CITY
 * @function requestCityByName
 * @param {string} - title  
 * @param {array} - cities
 * @returns {function} - Redux Thunk function.
*/
export const requestCityByName = (title, cities = []) => {
  return function (dispatch) {
    return axios
      .get(`${AXIOS_BASE_URL}weather?${API_KEY_AND_UNITS}&q=${title}`)
      .then((response) => {
        const cityAlreadyInList = cities.findIndex(
          (c) => c.id === response.data.id
        );
        if (cityAlreadyInList === -1) {
          dispatch({
            type: actionTypes.ADD_CITY,
            payload: response.data,
          });
          dispatch({
            type: actionTypes.SET_CURRENT_INDEX,
            payload: 0,
          });
          dispatch({
            type: actionTypes.SET_ACTIVE_CITY,
            payload: response.data,
          });
        } else {
          dispatch({
            type: actionTypes.SET_CURRENT_INDEX,
            payload: cityAlreadyInList,
          });
          dispatch({
            type: actionTypes.SET_ACTIVE_CITY,
            payload: response.data,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: actionTypes.SET_CURRENT_INDEX,
          payload: -2,
        });
      });
  };
};

/**
 * Returns Redux Thunk function that dispatches the action DELETE_CITY
 * @function deleteCity
 * @param {object} - item  
 * @returns {function} - Redux Thunk function.
*/
export const deleteCity = item => {
    return function (dispatch) {
      dispatch({
        type: actionTypes.DELETE_CITY,
        payload: item,
      });
    };
  };
  
/**
 * Returns Redux Thunk function that dispatches the action SET_ACTIVE_CITY
 * @function setActiveCity
 * @param {object} - item  
 * @returns {function} - Redux Thunk function.
*/
export const setActiveCity = item => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.SET_ACTIVE_CITY,
      payload: item,
    });
  };
};

/**
 * Returns Redux Thunk function that dispatches the action SET_CURRENT_INDEX
 * @function setCurrentIndex
 * @param {number} - index 
 * @returns {function} - Redux Thunk function.
*/
export const setCurrentIndex = index => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.SET_CURRENT_INDEX,
      payload: index,
    });
  };
};
