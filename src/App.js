import React, {Fragment, Component} from 'react';
import './App.css';
import Navbar from "./components/layout/NavBar";

class App extends Component {
    render(){
        const name = 'Erik'
        return (
            <Fragment>
                <Navbar />
                <h1>Hello from {name}</h1>
            </Fragment>
        );
    }

}

export default App;
