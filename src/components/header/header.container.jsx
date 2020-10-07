import React from 'react';
import { HOME, SIGN_IN } from '../../constants/routes';
import Header from './header.component';
import logo from "./logo.svg"

export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={HOME} src={logo} alt="Netflix Logo" />
                <Header.ButtonLink to={SIGN_IN}>
                    Sign In
                </Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}
