import React from 'react';
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./header.styles"

export default function Header({ bg = true, children, ...otherProps }) {
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
        <ReactRouterLink exact to={to}>
            <Logo {...otherProps} />
        </ReactRouterLink>
    )
}
Header.ButtonLink = function HeaderButtonLink({ children, ...otherProps }) {
    return <ButtonLink {...otherProps}>{children}</ButtonLink>
}