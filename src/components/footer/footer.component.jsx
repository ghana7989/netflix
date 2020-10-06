import React from 'react';
import { Container, Row, Column, Links, Title, Text, Break } from "./footer.styles";

export default function Footer({ children, ...otherProps }) {
    return (
        <Container {...otherProps}>
            {children}
        </Container>
    );
}

Footer.Row = ({ children, ...otherProps }) => {
    return <Row {...otherProps}>{children}</Row>
}
Footer.Column = ({ children, ...otherProps }) => {
    return <Column {...otherProps}>{children}</Column>
}
Footer.Links = ({ children, ...otherProps }) => {
    return <Links {...otherProps}>{children}</Links>
}
Footer.Title = ({ children, ...otherProps }) => {
    return <Title {...otherProps}>{children}</Title>
}
Footer.Text = ({ children, ...otherProps }) => {
    return <Text {...otherProps}>{children}</Text>
}
Footer.Break = ({ children, ...otherProps }) => {
    return <Break {...otherProps}>{children}</Break>
}
