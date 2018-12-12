import React, { Component } from 'react';
import Contributors from './Contributors';

class App extends Component {
    state = {
        contributors : [
            { name : 'Himanshu Tiwari', username : 'himanshu-tiwari', access : 'write', id : 1 },
            { name : 'Aditya Chawla', username : 'chawlaaditya8', access : 'read', id : 2 },
            { name : 'Himanshu Tiwari', username : 'htiwarih0', access : 'read', id : 3 }
        ]
    };
    
    render() {
        return (
            <div className="App">
                <h1>Sample React Application</h1>
                <p>Contributors:-</p>

                <Contributors contributors={ this.state.contributors } />
            </div>
        );
    }
}

export default App;
