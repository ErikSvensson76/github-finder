import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import axios from 'axios';
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";

class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: null
    }

    searchUsers = async text =>{
        this.setState({loading: true});

        const response = await axios.get(`https://api.github.com/search/users?q=${text}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users: response.data.items, loading: false});
    }

    clearUsers = () => this.setState({users: [], loading: false})

    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}});

        setTimeout(()=> this.setState({alert: null}), 5000)
    }


    render(){
        const {users, loading, alert} = this.state;
        return (
            <div className='App'>
                <Navbar />
                <div className='container'>
                    <Alert alert={alert} />
                    <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0} setAlert={this.setAlert}/>
                    <Users loading={loading} users={users}/>
                </div>
            </div>
        );
    }
}

export default App;
