import { take, put, call, fork } from "redux-saga/effects";

import ApiSauce from "../../services/apiSauce";
import { verify_reset_code_Api } from "../../config/WebServices";
import * as types from "../actions/ActionTypes";

import { success, failure } from "../actions/VerifyResetCode";

import { ErrorHelper } from "../../helpers";

function callRequest(data) {
  return ApiSauce.post(verify_reset_code_Api, data);
}
function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.VERIFY_RESET_CODE.REQUEST);

    // const { targetView } = payload;
    // delete payload.targetView;
    try {
      const response = yield call(callRequest, payload);
      // console.log(response, "ress111111111111111sssssssoooooooooo");
      yield put(success(response));
      //   setTimeout(() => {
      //     Actions.verify({
      //       phoneNumber: JSON.stringify(payload.phoneNumber).replace(/\"/g, ""),
      //       targetView: targetView,

      //       title: strings("navtitles.otp")
      //     });
      //   }, 800);
    } catch (err) {
      yield put(failure(err));
      ErrorHelper.handleErrors(err, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
