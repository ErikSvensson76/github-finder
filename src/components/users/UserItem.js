import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user: {login, avatar_url, html_url}}) => { //const {login, avatar_url, html_url} = props.user Functionality moved up here
    //const {login, avatar_url, html_url} = props.user; //Destructuring
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt='Not found' className='round-img' style={{width: '60px'}}/>
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;