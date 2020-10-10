import React from 'react';
import { render } from 'react-dom';
import "normalize.css";
import App from './app';
import { GlobalStyles } from "./globalStyles"
import FirebaseContextProvider from './context/firebase';
render(
  <>
    <GlobalStyles />
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
  </>,
  document.getElementById('root')
);

