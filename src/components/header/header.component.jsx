import React from 'react';
import { useState } from 'react';
import { Link as ReactRouterLink } from "react-router-dom";
import { HOME } from '../../constants/routes';
import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Group,
    Feature,
    Text,
    FeatureCallout,
    Dropdown,
    Link,
    Picture,
    Profile,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from "./header.styles"

export default function Header({ bg = true, buttonLinkText = "Sign In", location, children, ...otherProps }) {

    return bg ? (
        <Background {...otherProps}>
            {children}
        </Background>
    ) : children
}
Header.Text = function HeaderText({ children, ...otherProps }) {
    return <Text {...otherProps}>{children}</Text>
}
Header.Dropdown = function HeaderDropdown({ children, ...otherProps }) {
    return <Dropdown {...otherProps}>{children}</Dropdown>
}
Header.TextLink = function HeaderTextLink({ children, ...otherProps }) {
    return <Link {...otherProps}>{children}</Link>
}
Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...otherProps }) {
    const [searchActive, setsearchActive] = useState(false)
    return (<Search {...otherProps} >
        <SearchIcon onClick={() => setsearchActive(searchActive => !searchActive)}>
            <img src="https://i.imgur.com/dGEZOF8.png" alt="search-icon" />
        </SearchIcon>
        <SearchInput
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            placeholder="Search Films and Series"
            active={searchActive}
        />
    </Search>)
}
Header.Profile = function HeaderProfile({ children, ...otherProps }) {
    return <Profile {...otherProps}>{children}</Profile>
}
Header.Picture = function HeaderPicture({ src, ...otherProps }) {
    return <Picture {...otherProps} src={src} />
}
Header.FeatureCallout = function HeaderFeatureCallout({ children, ...otherProps }) {
    return <FeatureCallout {...otherProps}>{children}</FeatureCallout>
}
Header.Feature = function FeatureTitle({ children, ...otherProps }) {
    return <Feature {...otherProps}>{children}</Feature>
}
Header.Frame = function HeaderFrame({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}
Header.Group = function HeaderGroup({ children, ...otherProps }) {
    return <Group {...otherProps}>{children}</Group>
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
Header.PlayButton = function HeaderPlayButton({ children, ...otherProps }) {
    return <PlayButton {...otherProps}>{children}</PlayButton>
}