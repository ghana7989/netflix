import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Body, Header, Inner } from "./faq.styles";

const ToggleContext = createContext();

export default function FAQ({ children, ...otherProps }) {
    return (
        <Container {...otherProps}>
            <Inner> {children}</Inner>
        </Container>
    );
}

FAQ.Title = ({ children, ...otherProps }) => {
    return <Title {...otherProps}>{children}</Title>
}
FAQ.Frame = ({ children, ...otherProps }) => {
    return <Frame {...otherProps}>{children}</Frame>
}
FAQ.Item = function FAQItem({ children, ...otherProps }) {
    const [toggleShow, setToggleShow] = useState(false)
    return <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
        <Item {...otherProps}>{children}</Item>
    </ToggleContext.Provider>
}
FAQ.Header = function FAQHeader({ children, ...otherProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    const handleToggle = () => {
        setToggleShow((toggleShow) => !toggleShow)
    }
    return (
        <Header on={toggleShow} onClick={handleToggle} {...otherProps}>
            {children}
            {
                toggleShow ? (<img src="https://i.imgur.com/r9f09Nt.png" alt="Close"></img>)
                    : (<img src="https://i.imgur.com/LbvbYvk.png" alt="Add" />)
            }
        </Header>
    ) 
}
FAQ.Body = function FAQBody({ children, ...otherProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    return toggleShow ? <Body on={toggleShow} {...otherProps}>{children}</Body> : null
}