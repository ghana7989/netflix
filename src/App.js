import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HOME, SIGN_UP, SIGN_IN, BROWSE } from "./constants/routes";
import BrowsePage from './pages/Browse';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import HomePage from "./pages/Home";
import FirebaseContextProvider from './context/firebase';

function App() {

  return (
    <FirebaseContextProvider>

      <div className="App">
        <Router>
          <Route exact path={HOME} component={HomePage} />
          <Route path={BROWSE} component={BrowsePage} />
          <Route path={SIGN_IN} component={SignInPage} />
          <Route path={SIGN_UP} component={SignUpPage} />
        </Router>
      </div>
    </FirebaseContextProvider>
  );
}

export default App;
