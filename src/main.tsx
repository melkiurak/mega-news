import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { Login } from './components/Login/Login.tsx';
import { NotFoundPage } from './components/404/404.tsx';
import Parse from 'parse';
import AsyncStorage from '@react-native-async-storage/async-storage';
const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path:'/login', element: <Login/>},
  {path:'*', element: <NotFoundPage/>}
]);
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  import.meta.env.VITE_APPLICATION_ID,
  import.meta.env.VITE_JAVASCRIPT_KEY
);
Parse.serverURL = 'https://parseapi.back4app.com/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
