import React from 'react';
import './UserList.css';
import './UserItem';
import UserItem from './UserItem';

const UsersList = props => {
    if(props.items.length === 0){
        return (
            <div className="center">
                <h2>No User Found......404</h2>
            </div>
        );
    }
    return <ul className='users-list'>
        {props.items.map(user => {
            return <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                place={user.place}
            />;
        })}
    </ul>;
};

export default UsersList;