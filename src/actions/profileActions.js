import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_PROFILES
} from './types';

import keyURL from '../config/keys_dev';

let URL = keyURL['prodURL'];
// if (process.env.NODE_ENV === 'production') {
//   URL = keyURL['prodURL'];
// } else {
//   URL = keyURL['devURL'];
// }

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get(URL + '/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    )
}

// Get profile by handle
export const getProfileByHandle = (handle) => dispatch => {
  dispatch(setProfileLoading());
  axios.get(URL + `/api/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    )
}

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post(URL + '/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can not be undone!')) {
    axios.delete(URL + '/api/profile')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      ).catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
}

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}

// Add experience
export const addExperience = (expData, history) => disptach => {
  axios
    .post(URL + '/api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      disptach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}


// Add education
export const addEducation = (eduData, history) => disptach => {
  axios
    .post(URL + '/api/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      disptach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}


// Delete experience
export const deleteExperience = (id) => dispatch => {
  axios
    .delete(URL + `/api/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Delete education
export const deleteEducation = (id) => dispatch => {
  axios
    .delete(URL + `/api/profile/education/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(URL + '/api/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
}