import React, { Suspense } from 'react';
import './components/i18n';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Spinner from './components/views/LandingPage/Sections/Spinner';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import Reducer from './_reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
          <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// serviceWorker.unregister();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

