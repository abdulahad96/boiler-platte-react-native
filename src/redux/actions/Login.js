// @flow

import { LOGIN, LOGOUT } from "./ActionTypes";

export function request(payload) {
  return {
    payload,
    type: LOGIN.REQUEST
  };
}

export function success(data: Object) {
  return {
    data,
    type: LOGIN.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: LOGIN.FAILURE
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
