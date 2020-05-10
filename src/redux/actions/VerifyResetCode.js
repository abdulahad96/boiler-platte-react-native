// @flow

import { VERIFY_RESET_CODE } from "./ActionTypes";

export function request(payload) {
  return {
    payload,
    type: VERIFY_RESET_CODE.REQUEST
  };
}

export function success(data: Object) {
  return {
    data,
    type: VERIFY_RESET_CODE.SUCCESS
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: VERIFY_RESET_CODE.FAILURE
  };
}