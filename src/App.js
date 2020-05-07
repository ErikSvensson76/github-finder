import React, {Fragment, Component} from 'react';
import './App.css';
import Navbar from "./components/layout/NavBar";
import Users from "./components/users/Users";

class App extends Component {
    render(){
        return (
            <Fragment className='App'>
                <Navbar />
                <div className='container'>
                    <Users />
                </div>
            </Fragment>
        );
    }
}

export default App;
