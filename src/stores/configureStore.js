import {applyMiddleware, compose, createStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import Reactotron from '../../ReactotronConfig';
import {fashionDreamRootReducer} from './reducers/rootReducer';
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
export const store = createStore(
  fashionDreamRootReducer,

  composeEnhancers(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

export const persistor = persistStore(store);
