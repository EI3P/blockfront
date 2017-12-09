import React, { Component } from 'react';
import 'normalize.css'
import '@blueprintjs/core/dist/blueprint.css'
import '@blueprintjs/core/resources/icons/icons-20.woff'
import '@blueprintjs/core/resources/icons/icons-20.ttf'
import '@blueprintjs/core/resources/icons/icons-20.eot'
import '@blueprintjs/core/resources/icons/icons.json'
import 'bootstrap-4-grid/css/grid.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blockfront</h1>
        </header>
        <p className="App-intro">
          Welcome, my elves. oOo.oO.Oo.oOo
        </p>
      </div>
    );
  }
}

export default App;
