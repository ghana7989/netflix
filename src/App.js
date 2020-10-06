import React from 'react';
import { FAQContainer } from './components/faq/faq.container';
import { FooterConatiner } from './components/footer/footer.container';
import JumbotronContainers from './components/jumbotron/jumbotron-containers';

function App() {
  return (
    <div className="App">
      <JumbotronContainers />
      <FAQContainer/>
      <FooterConatiner />
    </div>
  );
}

export default App;
