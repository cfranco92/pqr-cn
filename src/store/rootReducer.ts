import accountReducer from "./account";
import { combineReducers } from "@reduxjs/toolkit";
import { pqrsApi } from "../services/pqrs";

const rootReducer = combineReducers({
  account: accountReducer,
  [pqrsApi.reducerPath]: pqrsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
