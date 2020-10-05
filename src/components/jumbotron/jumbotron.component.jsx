import React from 'react';
import { Item, Inner, Pane, Title, SubTitle, Image, Container } from "./jumbotron.styles"

export default function Jumbotron({ children, direction = "row", ...otherProps }) {
    return (
        <Container>
            <Item >
                <Inner direction={direction}>{children}</Inner>
            </Item>
        </Container>
    );
}

Jumbotron.Pane = ({ children, ...otherProps }) => {
    return <Pane {...otherProps}>{children}</Pane>
}
Jumbotron.Title = ({ children, ...otherProps }) => {
    return <Title {...otherProps}>{children}</Title>
}
Jumbotron.SubTitle = ({ children, ...otherProps }) => {
    return <SubTitle {...otherProps}>{children}</SubTitle>
}
Jumbotron.Container = ({ children, ...otherProps }) => {
    return <Container {...otherProps}>{children}</Container>
}
Jumbotron.Image = ({ ...otherProps }) => {
    return <Image {...otherProps} />
}