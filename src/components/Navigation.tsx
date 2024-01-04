import { useAuth0 } from "@auth0/auth0-react";
import React from "react"
import { Outlet, Route, Routes, useNavigate} from "react-router-dom";
import OverView from "./OverView";
import ShopManagement from "./ShopManagement";
import DishManagement from "./DishManagement";
import UserManagement from "./UserManagement";
import ProductManagement from "./ProductManagement";
import CategoryManagement from "./CategoryManagement";
import MealTypeManager from "./MealTypeManager";
import OriginManagement from "./OriginManagement";
import ChatManagement from "./ChatManagement";
import CommentsManagement from "./CommentsManagement";
import RatingsManagement from "./RatingsManagement";
import ValidationManagement from "./ValidationManagement";
const Navigation = () => {
    const { user, isLoading } = useAuth0();
    
    const navigate = useNavigate()
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    

    return (
        <>
            <div>
                <div className="flex">
                    {/* side navigation */}
                    <div className="h-screen w-72 ">
                        <div 
                            onClick={()=>{navigate('/Profile')}}
                            className="flex justify-center items-center">
                            <img src={user?.picture} alt={user?.name} className="w-20 h-20 rounded-2xl mr-5"/>
                            <p>{user?.name}</p>
                        </div>
                        <div>
                            <ul>
                                <li onClick={()=>{navigate('UserManagement')}}>User Management</li>
                                <li onClick={()=>{navigate('ShopManagement')}}>Shop Management</li>
                                <li onClick={()=>{navigate('DishManagement')}}>Dish Management</li>
                                <li onClick={()=>{navigate('ProductManagement')}}>Product Management</li>
                                <li onClick={()=>{navigate('CategoryManagement')}}>Category Management</li>
                                <li onClick={()=>{navigate('MealTypeManager')}}>Meal Type Manager</li>
                                <li onClick={()=>{navigate('OriginManagement')}}>Origin Management</li>
                                <li onClick={()=>{navigate('ChatManagement')}}>Chat Management</li>
                                <li onClick={()=>{navigate('CommentsManagement')}}>Comments Management</li>
                                <li onClick={()=>{navigate('RatingsManagement')}}>Ratings Management</li>
                                <li onClick={()=>{navigate('ValidationManagement')}}>Validation Management</li>
                            </ul>
                        </div>
                    </div>
                    {/* the Main content */}
                    <div>
                        <Outlet/>
                        <Routes>
                            <Route path="/*" element={<OverView/>}/>
                            <Route path="UserManagement" element={<UserManagement/>}/>
                            <Route path="ShopManagement" element={<ShopManagement/>}/>
                            <Route path="DishManagement" element={<DishManagement/>}/>
                            <Route path="ProductManagement" element={<ProductManagement/>}/>
                            <Route path="CategoryManagement" element={<CategoryManagement/>}/>
                            <Route path="MealTypeManager" element={<MealTypeManager/>}/>
                            <Route path="OriginManagement" element={<OriginManagement/>}/>
                            <Route path="ChatManagement" element={<ChatManagement/>}/>
                            <Route path="CommentsManagement" element={<CommentsManagement/>}/>
                            <Route path="RatingsManagement" element={<RatingsManagement/>}/>
                            <Route path="ValidationManagement" element={<ValidationManagement/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navigation