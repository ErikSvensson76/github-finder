import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import axios from 'axios';
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

class App extends Component {
    state = {
        users: [],
        user: {},
        loading: false,
        alert: null,
        repos: []
    }

    /**
     * Search Github users
     * @param text
     * @returns {Promise<void>}
     */
    searchUsers = async text =>{
        this.setState({loading: true});

        const response = await axios.get(`https://api.github.com/search/users?q=${text}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users: response.data.items, loading: false});
    }

    /**
     * Get a single Github user
     * @param username
     * @returns {Promise<void>}
     */
    getUser = async (username) => {
        this.setState({loading: true});

        const response = await axios.get(`https://api.github.com/users/${username}?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({user: response.data, loading: false});
    }

    getUserRepos = async (username) => {
        this.setState({loading: true});

        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({repos: response.data, loading: false});
    }


    /**
     * Clears users from state
     */
    clearUsers = () => this.setState({users: [], loading: false})

    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}});

        setTimeout(()=> this.setState({alert: null}), 5000)
    }


    render(){
        const {user, users, loading, alert, repos} = this.state;
        return (
            <Router>
            <div className='App'>
                <Navbar />
                <div className='container'>
                    <Alert alert={alert} />
                    <Switch>
                        <Route  exact path={'/'} render={props =>(
                            <Fragment>
                                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0} setAlert={this.setAlert}/>
                                <Users loading={loading} users={users}/>
                            </Fragment>
                        )}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/user/:login' render={props =>(
                            <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} user={user} repos={repos} loading={loading}/>
                        )}/>
                    </Switch>

                </div>
            </div>
            </Router>
        );
    }
}

export default App;
