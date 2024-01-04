import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
            {/* 
                lanfing page should be the login page
            */}
            <Route index path="/" element={<LoginPage/>}/>
            <Route path="Profile" element={<Profile/>} />
            <Route path="Home/*" element={<Navigation/>} />
              {/* <Route path="home" element={<Categories/>}/> 
              <Route path="productPage" element={<ProductPage/>}/> */}
            
          </Routes>
      </Router>
    </>
  )
}
