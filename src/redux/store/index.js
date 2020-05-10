import { createStore, applyMiddleware } from "redux";
import * as storage from "redux-storage";
import { compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
// import createEngine from "redux-storage-engine-reactnativeasyncstorage";

import { rootReducer } from "../reducers";
import rootSaga from "../sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true
});

// const engine = createEngine("AppTree");

// const storeMiddleware = storage.createMiddleware(engine);

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    storage.reducer(rootReducer),
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
