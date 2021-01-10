/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import Fuse from 'fuse.js'
import { SelectProfileContainer } from '../profile/profile.container'
import { FirebaseContext } from "../../context/firebase"
import { useState } from 'react'
import { Loading } from '../loading/loading.component'
import Header from '../header/header.component'
import { HOME } from '../../constants/routes'
import logo from "./logo.svg"
import Card from '../card/card.component';
import Player from "../player/player.component";
import { FooterConatiner as FooterContainer } from "../footer/footer.container"


export function BrowserContainer({ slides }) {
  const [category, setCategory] = useState("series")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = React.useState({})
  const [slideRows, setSlideRows] = useState([]);

  const { firebase_ } = React.useContext(FirebaseContext)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [profile])

  React.useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ["data.description", "data.title", "data.genre"] })
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 2 && results.length > 0) {
      setSlideRows(results)
    } else {
      setSlideRows(slides[category])
    }
  }, [searchTerm])

  React.useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);
  const user = firebase_.auth().currentUser || {};
  return !profile.displayName ? (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  ) : (
      <>
        {
          loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />
        }
        <Header src="https://i.imgur.com/OswPfm1.jpg" dontShowOnSmallViewPort={true}>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={HOME} src={logo} />
              <Header.TextLink
                active={category === "series" ? "true" : "false"}
                onClick={() => setCategory("series")}
              >Series</Header.TextLink>
              <Header.TextLink
                active={category === "films" ? "true" : "false"}
                onClick={() => setCategory("films")}
              >Films</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              ></Header.Search>
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>
                      {user.displayName}
                    </Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => firebase_.auth().signOut()}>
                      Sign Out
                                        </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallout>
              Watch Joker Now
                        </Header.FeatureCallout>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.
                        </Header.Text>
            <Header.PlayButton>
              Play
                        </Header.PlayButton>
          </Header.Feature>
        </Header>
        <Card.Group>
          {slideRows.map((slideItem) => (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image src={`images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="videos/life.mp4" />
                </Player>
              </Card.Feature>
            </Card>
          ))}
        </Card.Group>
        <FooterContainer />
      </>
    )
}