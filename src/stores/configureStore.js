import {applyMiddleware, compose, configureStore} from '@reduxjs/toolkit';
import {fashionDreamRootReducer} from './reducers/rootReducer';
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
export const store = configureStore({
  reducer: fashionDreamRootReducer,
  enhancers: composeEnhancers(applyMiddleware(thunk)),
});
