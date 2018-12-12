import React, { Component } from 'react';
import Contributor from './Contributor';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Sample React Application</h1>
                <p>Contributors:-</p>
                <Contributor />
            </div>
        );
    }
}

export default App;
