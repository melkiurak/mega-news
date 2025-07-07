import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { Login } from './components/Login/Login.tsx';
import { NotFoundPage } from './components/404/404.tsx';
import { Provider} from 'react-redux';
import { store } from './redux/store.ts';
const router = createBrowserRouter([
  {path: '/', element: <App/>, children: [
    {path:'*', element: <NotFoundPage/>}
  ]},
  {path:'/login', element: <Login/>},
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
