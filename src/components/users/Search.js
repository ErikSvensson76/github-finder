import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    onSubmit = (event) => {
        event.preventDefault(); //Not to self: Find out why i really need this
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    };

    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' name='text' /*event.target.name */ placeholder='Search Users...' value={this.state.text} /* event.target.value */ onChange={this.onChange}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                </form>
                {showClear &&(
                    <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
                )}

            </div>
        );
    }
}

export default Search;