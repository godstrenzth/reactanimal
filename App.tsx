
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgetPage from './pages/Forgot';

import Profile from './pages/Profile';
import Editprofile from './pages/Editrpofile';
import ImgPage from './pages/image';
import DetailimgPage from './pages/Detailimg';
import VSPage from './pages/VS';
import RankPage from './pages/Rank';

import AllprofilePage from './pages/admin/allprofile';
import Rankallpage from './pages/admin/Rankall';
import DetailimgAdminPage from './pages/admin/DetailimgAdmin';
import UseralladminPage from './pages/admin/useradmin';
import UpdateimgPage from './pages/updateimg';

function App() {
  const routers = createBrowserRouter([
    {path:"/",element:<VSPage />},
    {path:"/login",element:<LoginPage />},
    {path:"/register",element:<RegisterPage />},
    {path:"/forgot",element:<ForgetPage />},
    {path:"/editprofile",element:<Editprofile />},
    {path:"/profile",element:<Profile />},
    {path:"/img",element:<ImgPage />},
    {path:"/detailimg/:id",element:<DetailimgPage />},
    {path:"/vs",element:<VSPage />},
    {path:"/rank",element:<RankPage />},
    {path:"/allprofile",element:<AllprofilePage />},
    {path:"/rankall",element:<Rankallpage />},
    {path:"/detailimgadmin/:id",element:<DetailimgAdminPage />},
    {path:"/user",element:<UseralladminPage />},
    {path:"/imgupdate",element:<UpdateimgPage />},
    
  ]);

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}

export default App
