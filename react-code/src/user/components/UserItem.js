import React from 'react';
import './UserItem.css';

const UserItem = props => {
    return (
        <li className='user-list'>
            <div className='user-list__content'>
                <div className='user-list__image'>
                    <img src={props.image} alt={props.name} />
                </div>
                <div className='user-list__info'>
                    <h2>{props.name}</h2>
                    <h3>{props.place} {props.place === 1 ? 'Place' : 'Places'}</h3>
                </div>
            </div>
        </li>
    );
};

export default UserItem;