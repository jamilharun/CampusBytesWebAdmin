import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { fetchAllUser } from "../Api/server";

const UserManagement = () => {
  // const [users, setUsers] = useState([]);

  const {
    data: users,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["fetchUsers"],
    queryFn: fetchAllUser,
    gcTime: 10000,
  });

  console.log({ isLoading, isFetching, error, users });

  return (
    <div className="h-16 px-10 py-5 bg-slate-400">
      <h1 className="text-2xl font-medium">User Management</h1>
      <br />
      <br />
      <div>
        <div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="grid grid-cols-12 gap-5">
                <th>User ID</th>
                <th>Given Name</th>
                <th>Family Name</th>
                <th>nickName</th>
                <th>name</th>
                <th>image</th>
                {/* <th>Email</th> */}
                <th>Password Hash</th>
                <th>Phone Number</th>
                <th>Roles</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user: any) => (
                <tr
                  key={user.userid}
                  className="grid grid-cols-12 gap-5 overflow-hidden"
                >
                  <td className="overflow-hidden">{user.userid}</td>
                  <td className="overflow-hidden">{user.given_name}</td>
                  <td className="overflow-hidden">{user.family_name}</td>
                  <td className="overflow-hidden">{user.nickname}</td>
                  <td className="overflow-hidden">{user.name}</td>
                  {/* <td>{user.image}</td> */}
                  <td className="overflow-hidden">{user.password_hash}</td>
                  <td className="overflow-hidden">{user.phoneNumber}</td>
                  <td className="overflow-hidden">{user.roles}</td>
                  <td className="overflow-hidden">{user.created_at}</td>
                  <td className="overflow-hidden">{user.updated_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
