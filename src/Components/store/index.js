import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { countReducer } from "./countReducer";
import createSagaMiddleware from "redux-saga";
import { countWatcher } from "../../saga/countSaga";
import { rootWatcher } from "../../saga";
import { userReducer } from "./userReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  count: countReducer,
  users: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk), applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
