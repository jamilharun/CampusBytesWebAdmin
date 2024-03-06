import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchAllUser } from '../Api/server';

const UserManagement = () => {
  // const [users, setUsers] = useState([]);

  const { data: users, isLoading, error, isFetching} = useQuery({ 
    queryKey: ['fetchUsers'], 
    queryFn: fetchAllUser,
    gcTime: 10000,
  });
  
  console.log({isLoading, isFetching, error, users});

  return (
    <div>
      <h1>User Management</h1>
      <div>
        <div>
          <ul className='grid grid-cols-12 gap-5'>
            <li>User ID</li>
            <li>Given Name</li>
            <li>Family Name</li>
            <li>nickName</li>
            <li>name</li>
            <li>image</li>
            {/* <li>Email</li> */}
            <li>password hash</li>
            <li>phone number</li>
            <li>roles</li>
            <li>created at</li>
            <li>updated at</li>
          </ul>
        </div>
        <div>
          {users?.map((user : any) => (
            <ul key={user.userid } className='grid grid-cols-12 gap-5 overflow-hidden'>
              <li className='overflow-hidden'>{user.userid}</li>
              <li className='overflow-hidden'>{user.given_name}</li>
              <li className='overflow-hidden'>{user.family_name}</li>
              <li className='overflow-hidden'>{user.nickname}</li>
              <li className='overflow-hidden'>{user.name}</li>
              {/* <li>{user.image}</li> */}
              <li className='overflow-hidden'>{user.email}</li>
              <li className='overflow-hidden'>{user.password_hash}</li>
              <li className='overflow-hidden'>{user.phoneNumber}</li>
              <li className='overflow-hidden'>{user.roles}</li>
              <li className='overflow-hidden'>{user.created_at}</li>
              <li className='overflow-hidden'>{user.updated_at}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;