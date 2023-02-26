import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import CounterApp from './CounterApp'
// import './index.css'
import { MantineProvider } from '@mantine/core';
import {applyMiddleware, createStore} from "redux"
import { Provider } from 'react-redux';
// import bankingReducer from "./reducer"
import counterReducer from './counterReducer';
import logger from 'redux-logger';
import PostApp from './PostApp';
import thunk from 'redux-thunk';
import postReducer from './postReducer';

const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Action from first middleware ",action);
      next(action)
    }
  }
}

const mySecondMiddleware = (store) =>  (next) =>  (action) => {
  console.log("Action from Second middleware ",action);
  next(action)
}



const stopAtTen = (store) => (next) =>  (action) => {
  // const state = store.getState();

  // if(state === 10) next({type : ""})
  // else next(action);

  if(action.type === 'INCREMENT') {
    next({type : 'DECREMENT'})
  } else if(action.type === 'DECREMENT') {
    next({type : 'INCREMENT'})
  }
}

// const store = createStore(counterReducer, applyMiddleware(myLogger, mySecondMiddleware, stopAtTen, logger));

// logger will take care --> next(action) definatlty exists

const store = createStore(postReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      {/* <App /> */}
      {/* <CounterApp /> */}
      <PostApp />
    </Provider> 
  </MantineProvider>
);