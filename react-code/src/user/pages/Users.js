import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id:'no001',
        name:'ChamrouenSann',
        image:'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        places:3
    }]
    return <UsersList items={USERS} />;
};

export default Users;