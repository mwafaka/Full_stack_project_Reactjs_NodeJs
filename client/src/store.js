import { createStore, applyMiddleware ,} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const reduxStoreStorage = 'redux-store'
const initialState = JSON.parse(localStorage.getItem(reduxStoreStorage)) || {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(()=> {
  const state = JSON.stringify(store.getState())
  localStorage.setItem(reduxStoreStorage, state)
})

export default store;
