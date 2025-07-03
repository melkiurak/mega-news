import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { Login } from './components/Login/Login.tsx';
import { NotFoundPage } from './components/404/404.tsx';

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path:'/login', element: <Login/>},
  {path:'*', element: <NotFoundPage/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
