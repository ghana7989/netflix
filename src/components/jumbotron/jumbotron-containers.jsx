import React from 'react';
import jumbotronData from "../../fixtures/jumbotron.json";
import Jumbotron from './jumbotron.component';

export default function JumbotronContainers() {
  return (
    <>{
      jumbotronData.map((item) => {
        return (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        )
      })}
    </>
  );
}
