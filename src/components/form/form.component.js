import React from 'react';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from "./form.styles"

const Form = ({ children, ...otherProps }) => {
    return (
        <Container {...otherProps}>
            {children}
        </Container>
    );
}

Form.Error = function FormError({ children, ...otherProps }) {
    return <Error {...otherProps}>{children}</Error>
}
Form.Base = function FormBase({ children, ...otherProps }) {
    return <Base {...otherProps}>{children}</Base>
}
Form.Title = function FormTitle({ children, ...otherProps }) {
    return <Title {...otherProps}>{children}</Title>
}
Form.Text = function FormText({ children, ...otherProps }) {
    return <Text {...otherProps}>{children}</Text>
}
Form.TextSmall = function FormTextSmall({ children, ...otherProps }) {
    return <TextSmall {...otherProps}>{children}</TextSmall>
}
Form.Link = function FormLink({ children, ...otherProps }) {
    return <Link {...otherProps}>{children}</Link>
}
Form.Input = function FormInput({ children, ...otherProps }) {
    return <Input {...otherProps}>{children}</Input>
}
Form.Submit = function FormSubmit({ children, ...otherProps }) {
    return <Submit {...otherProps}>{children}</Submit>
}



export default Form;
