import './App.css';
import { Header } from '@components/header/Header';
import { Outlet } from 'react-router';
import Footer from '@components/footer/Footer';

function Layout() {

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