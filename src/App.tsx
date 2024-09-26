
import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TestPage1 from './Components/TestPage1';
import Home from './Components/Home';
import SendDataToServer from './Components/SendDataToServer';
import SignUPpage from './Components/SignUPpage';
import { ReciveAllusersData } from './Components/ReciveAllusersData';
import AllPurpousSQLrunner from './Components/AllPurpousSQLrunner';
import MoneyManager from './Components/MoneyManager';
import Login_Page from './pages/Login_Page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"test1",
    element:<TestPage1/>
  },
  {
    path : "test2",
    element:<SendDataToServer/>
  },{
    path : "test3",
    element : <SignUPpage/>
  },
  {
    path:"test4",
    element:<ReciveAllusersData/>
  },
  {
    path:"test5",
    element:<AllPurpousSQLrunner/>
  },
  {
    path:"test6",
    element:<MoneyManager/>
  },
  {
    path:"login",
    element:<Login_Page/>
  }
]);


const App:React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App

