import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { products } from "./reducers";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  products: products,
  form: formReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
