import React from 'react';
import { FooterConatiner } from './components/footer/footer.container';
import JumbotronContainers from './components/jumbotron/jumbotron-containers';

function App() {
  return (
    <div className="App">
      <JumbotronContainers />
      <FooterConatiner />
    </div>
  );
}

export default App;
