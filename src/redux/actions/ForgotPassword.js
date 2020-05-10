// @flow

import { FORGOT_PASSWORD } from "./ActionTypes";

export function request(payload) {
  return {
    payload,
    type: FORGOT_PASSWORD.REQUEST
  };
}

export function success(data: Object) {
  return {
    data,
    type: FORGOT_PASSWORD.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: FORGOT_PASSWORD.FAILURE
  };
}