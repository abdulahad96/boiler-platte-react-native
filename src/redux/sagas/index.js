import login from "./Login";
import register from "./Register";
import forgotPassword from "./ForgotPassword";
import verifyResetCode from "./VerifyResetCode";
import resetPassword from "./ResetPassword";
import socialLogin from "./SocialLogin";

import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(login);
  yield fork(register);
  yield fork(forgotPassword);
  yield fork(verifyResetCode);
  yield fork(resetPassword);
  yield fork(socialLogin);
}
