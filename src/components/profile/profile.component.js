import React from 'react'
import { Title, List, Item, Picture, Name, Container } from "./profile.styles"

export default function Profile({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

Profile.Title = function FeatureTitle({ children, ...otherProps }) {
    return <Title {...otherProps}>{children}</Title>
}
Profile.List = function FeatureList({ children, ...otherProps }) {
    return <List {...otherProps}>{children}</List>
}
Profile.User = function FeatureUser({ children, ...otherProps }) {
    return <Item {...otherProps}>{children}</Item>
}
Profile.Picture = function FeaturePicture({ user, ...otherProps }) {
    const source = (user.photoURL === null || user.photoURL === undefined) ? "https://i.imgur.com/EYMCEfL.gif" : user.photoURL;
    return <Picture {...otherProps} src={source} />
}
Profile.Name = function FeatureName({ children, ...otherProps }) {
    return <Name {...otherProps}>{children}</Name>
}