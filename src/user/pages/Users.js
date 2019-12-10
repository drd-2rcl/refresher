import React from 'react'

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1', 
      name: 'Diogo Dias',
      image: 'https://api.adorable.io/avatars/80/abott@adorable.png',
      places: 3
    }
  ];
  return <UsersList items={USERS} />
}

export default Users;