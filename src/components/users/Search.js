import React, {Component} from 'react';

class Search extends Component {
    state = {
        text: ''
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (event) => {
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' name='text' /*event.target.name */ placeholder='Search Users...' value={this.state.text} /* event.target.value */ onChange={this.onChange}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                </form>
            </div>
        );
    }
}

export default Search;