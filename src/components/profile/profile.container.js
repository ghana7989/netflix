import React from 'react'
import logo from "./logo.svg";
import Header from "../header/header.component"
import { HOME } from '../../constants/routes';
import Profile from "./profile.component";


export function SelectProfileContainer({ user, setProfile }) {

  return (
    <React.Fragment>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={HOME} src={logo} />
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>
          Who is Watching?
            </Profile.Title>
        <Profile.List>
          <Profile.User onClick={() => setProfile({
            displayName: user.displayName,
            photoURL: user.photoURL
          })}>
            <Profile.Picture user={user} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>

        </Profile.List>

      </Profile>
    </React.Fragment>
  )
}