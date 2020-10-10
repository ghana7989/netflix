import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HOME, SIGN_UP, SIGN_IN, BROWSE } from "./constants/routes";
import BrowsePage from './pages/Browse';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import HomePage from "./pages/Home";
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import UserAuthListener from "./hooks/user-auth-listener";

function App() {
  const { user } = UserAuthListener()
  return (

    <div className="App">
      <Router>
        <IsUserRedirect
          user={user}
          loggedInPath={BROWSE}
          path={SIGN_IN}
        >
          <SignInPage />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={BROWSE}
          path={SIGN_UP}
        >
          <SignUpPage />
        </IsUserRedirect>
        <ProtectedRoute
          user={user}
          path={BROWSE}
        >
          <BrowsePage />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={BROWSE}
          path={HOME}
          exact
        >
          <HomePage />
        </IsUserRedirect>
      </Router>
    </div>
  );
}

export default App;
