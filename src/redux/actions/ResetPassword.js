// @flow

import { RESET_PASSWORD } from "./ActionTypes";

export function request(payload) {
  return {
    payload,
    type: RESET_PASSWORD.REQUEST
  };
}

export function success(data: Object) {
  return {
    data,
    type: RESET_PASSWORD.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: RESET_PASSWORD.FAILURE
  };
}