import React, { Component } from 'react';
import Contributor from './Contributor';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Sample React Application</h1>
                <p>Contributors:-</p>

                <Contributor name='Himanshu Tiwari' username='himanshu-tiwari' access='write' />
                <Contributor name='Aditya Chawla' username='chawlaaditya8' access='read' />
            </div>
        );
    }
}

export default App;
