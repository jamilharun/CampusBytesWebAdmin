import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import OverView from "./OverView";
import ShopManagement from "./ShopManagement";
import UserManagement from "./UserManagement";
import OrderManagement from "./OrderManagement";
import QueueManagement from "./QueueManagement";
const Navigation = () => {
  const { user, isLoading } = useAuth0();

  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (user){
    console.log(user);
    
  }

  return (
    <>
      <div>
        <div className="flex">
          {/* side navigation */}
          <div className="h-screen w-72 ">
            <div
              onClick={() => {
                navigate("/Profile");
              }}
              className="flex justify-center items-center"
            >
              <img
                src={user?.picture}
                alt={user?.name}
                className="w-20 h-20 rounded-2xl mr-5"
              />
              <p>{user?.name}</p>
            </div>
            <div className=" m-5 ">
              <ul>
                <li
                  className="navbar"
                  onClick={() => {
                    navigate("UserManagement");
                  }}
                >
                  User Management
                </li>
                <li
                  className="navbar"
                  onClick={() => {
                    navigate("ShopManagement");
                  }}
                >
                  Shop Management
                </li>
                <li
                  className="navbar"
                  onClick={() => {
                    navigate("OrderManagement");
                  }}
                >
                  Order Management
                </li>
                <li
                  className="navbar"
                  onClick={() => {
                    navigate("QueueManagement");
                  }}
                >
                  Queue Management
                </li>
              </ul>
            </div>
          </div>
          {/* the Main content */}
          <div>
            <Outlet />
            <Routes>
              <Route path="/*" element={<OverView />} />
              <Route path="UserManagement" element={<UserManagement />} />
              <Route path="ShopManagement" element={<ShopManagement />} />
              
              <Route path="OrderManagement" element={<OrderManagement />} />
              <Route path="QueueManagement" element={<QueueManagement />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
