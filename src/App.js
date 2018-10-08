import React, { Component } from 'react';

import { HeaderNav } from './components/organisms/headerNav';
import { MainRoute } from './components/pages/routes';

class App extends Component {
  render() {
    return ([
      <header key={1}>
        <HeaderNav />
      </header>,
      <main key={2}>
        <MainRoute />
      </main>,
      <footer key={3}></footer>
    ]);
  }
}

export default App;
