import React, { useContext, useState, createContext } from 'react'
import {
    Group, Title, SubTitle, Image, Container, Text, Item, Meta, Entities,
    Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content,
} from "./card.styles"

export const FeatureContext = createContext();

export default function Card({ children, ...otherProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...otherProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...otherProps }) {
    return <Group {...otherProps}>{children}</Group>
}
Card.Title = function CardTitle({ children, ...otherProps }) {
    return <Title {...otherProps}>{children}</Title>
}
Card.SubTitle = function CardSubTitle({ children, ...otherProps }) {
    return <SubTitle {...otherProps}>{children}</SubTitle>
}
Card.Text = function CardText({ children, ...otherProps }) {
    return <Text {...otherProps}>{children}</Text>
}
Card.Meta = function CardMeta({ children, ...otherProps }) {
    return <Meta {...otherProps}>{children}</Meta>
}
Card.Feature = function CardFeature({ category, children, ...otherProps }) {
    const { setShowFeature, itemFeature, showFeature } = useContext(FeatureContext);
    return showFeature ? (
        <Feature {...otherProps} src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="images/icons/close.png" alt="Close"
                    />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity + "+"}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature>
    ) : null
}
Card.Entities = function CardEntities({ children, ...otherProps }) {
    return <Entities {...otherProps}>{children}</Entities>
}
Card.Item = function CardItem({ item, children, ...otherProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    return <Item {...otherProps}
        onClick={() => {
            setItemFeature(item)
            setShowFeature(true)
        }}
    >{children}</Item>
}

Card.Image = function CardImage({ ...otherProps }) {
    return <Image {...otherProps} />
}
