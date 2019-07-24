import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_PROFILES,
  GET_REPOS
} from "./types";

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  // dispatch({ type: CLEAR_PROFILE });
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.token
      }
    };

    const res = await axios.get("/api/profile/me", config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    // alert("profile error" + JSON.stringify(error));
    dispatch({
      type: PROFILE_ERROR,
      // payload: { msg: error.response.statusText, status: error.response.status }
      payload: { msg: error.response, status: error.response }
    });
  }
};
// Get all Profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("/api/profile");

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response, status: error.response }
    });
  }
};
// Get  Profile by Id
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: "profile error please check your backend",
        status: "profile error please check your backend"
      }
    });
  }
};

// Get  Github repos
export const getGithubRepos = username => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/github/${username}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Create profile
export const createProfile = (
  data,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.token
      }
    };

    const res = await axios.post("api/profile", data, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
// Update profile
export const updateProfile = (
  data,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.token
      }
    };

    const res = await axios.put("/api/profile/update", data, config);
    console.log(res.data);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add Offer
export const addOffer = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.put("/api/profile/offer", formData, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setAlert("Offer Added", "success"));
    history.push("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};


// Reservation
export const reservation = (formData, history) => async dispatch => {
  try {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };
    const res = await axios.put("/api/profile/reservation", formData);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setAlert("Reservation Added", "success"));
    history.push("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
// Add Event
export const addEvent = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.put("/api/profile/event", formData, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setAlert("Event Added", "success"));
    history.push("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Delete experience
export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/event/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Event removed", "success"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Delete education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Education removed", "success"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Delete account and profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    try {
      await axios.delete("/api/profile");
      dispatch({
        type: CLEAR_PROFILE
      });
      dispatch({
        type: ACCOUNT_DELETED
      });
      dispatch(setAlert("your account has been deleted"));
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status
        }
      });
    }
  }
};
