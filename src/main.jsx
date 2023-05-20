import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './pages/Home/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import AllToys from './pages/AllToys/AllToys';
import MyToys from './pages/MyToys/MyToys';
import AddAToy from './pages/AddAToy/AddAToy';
import LogIn from './pages/LogIn/LogIn/LogIn';
import Registration from './pages/LogIn/Registration/Registration';
import AuthProvider from './providers/AuthProvider';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      },
      {
        path: 'myToys',
        element: <MyToys></MyToys>
      },
      {
        path: 'addToys',
        element: <AddAToy></AddAToy>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
