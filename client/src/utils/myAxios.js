import * as reqestLib from "axios";

export const setAuthToken = token => {
  if (token) {
    reqestLib.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete reqestLib.defaults.headers.common["x-auth-token"];
  }
};

export const axios = reqestLib;
