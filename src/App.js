import React, {Fragment, Component} from 'react';
import './App.css';
import Navbar from "./components/layout/NavBar";
import UserItem from "./components/users/UserItem";

class App extends Component {
    render(){
        return (
            <Fragment>
                <Navbar />
                <UserItem />

            </Fragment>
        );
    }

}

export default App;
