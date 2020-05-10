// @flow
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const CANCEL = "CANCEL";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const LOGIN = createRequestTypes("LOGIN");
export const REGISTER = createRequestTypes("REGISTER");
export const FORGOT_PASSWORD = createRequestTypes("FORGOT_PASSWORD");
export const VERIFY_RESET_CODE = createRequestTypes("VERIFY_RESET_CODE");
export const RESET_PASSWORD = createRequestTypes("RESET_PASSWORD");
export const SOCIAL_LOGIN = createRequestTypes("SOCIAL_LOGIN");
export const LOGOUT = "LOGOUT";

export const DRAWAR_MENU_SWITCHED = "DRAWAR_MENU_SWITCHED";
export const STACK_NAVIGATOR = "STACK_NAVIGATOR";
