import React from 'react'

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1', 
      name: 'Diogo Dias', 
      image: 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59&fp-debug=1',
      places: 3
    }
  ];
  return <UsersList items={USERS} />
}

export default Users;