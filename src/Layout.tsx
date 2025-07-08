import './App.css';
import { Header } from '@components/header/Header';
import { Outlet } from 'react-router';
import Footer from '@components/footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import  Parse  from './lib/parseClient';
import { logIn, setUser } from './redux/reducers/users-reducer';

function Layout() {
  const dispacth  = useDispatch();
  useEffect(() => {
    const user = Parse.User.current(); 
    if(user) {
      dispacth(logIn());
      dispacth(setUser({
        username: user.get('username'),
        avatar: user.get('avatar'),
      }))
    }
  },[dispacth])
  return (
    <div className='wrapper'>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;