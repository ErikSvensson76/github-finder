import React, {useContext, useState} from 'react';
import GithubContext from '../../context/github/githubContext'
import PropTypes from 'prop-types';

const Search = ({setAlert}) =>  {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('')

    const onChange = (event) => {
        setText(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault(); //Not to self: Find out why i really need this
        if(text === ''){
            setAlert('Please enter something','light')
        }else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

        return (
            <div>
                <form onSubmit={onSubmit} className='form'>
                    <input type='text' name='text' /*event.target.name */ placeholder='Search Users...' value={text} /* event.target.value */ onChange={onChange}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                </form>
                {githubContext.users.length > 0 &&(
                    <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>
                )}

            </div>
        );
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default Search;