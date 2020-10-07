import React from 'react';
import { Container, Input, Button, Text, Break } from "./optForm.styles"

export default function OptForm({ children, ...otherProps }) {
    return (
        <Container {...otherProps}>
            {children}
        </Container>
    );
}

OptForm.Input = function OptFormInput({ ...otherProps }) {
    return <Input {...otherProps} />
}
OptForm.Button = ({ children, ...otherProps }) => {
    return <Button {...otherProps}>
        {children}
        <img src="https://i.imgur.com/U4kzaDl.png" alt="Try Now"></img>
    </Button>
}
OptForm.Text = ({ children, ...otherProps }) => {
    return <Text {...otherProps}>{children}</Text>
}
OptForm.Break = () => {
    return <Break></Break>
}