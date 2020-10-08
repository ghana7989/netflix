import React from 'react';
import { Link as ReactRouterLink } from "react-router-dom";
import { HOME } from '../../constants/routes';
import { Background, Container, Logo, ButtonLink } from "./header.styles"

export default function Header({ bg = true, buttonLinkText = "Sign In", location, children, ...otherProps }) {

    return bg ? (
        <Background {...otherProps}>
            {children}
        </Background>
    ) : children
}

Header.Frame = function HeaderFrame({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}
Header.Logo = function HeaderLogo({ to, ...otherProps }) {
    return (
        <ReactRouterLink exact="true" to={HOME}>
            <Logo {...otherProps} />
        </ReactRouterLink>
    )
}
Header.ButtonLink = function HeaderButtonLink({ to, children, ...otherProps }) {
    return <ButtonLink to={to} {...otherProps}>{children}</ButtonLink>
}