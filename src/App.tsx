import './App.css'
import { Header } from '@components/header/Header'
import { Slider } from '@components/slider/Slider'
import { PopularPost } from '@components/Posts/PopularPost/PopularPost'
import { Outlet } from 'react-router'
import  Footer  from '@components/footer/Footer'

function App() {

  return (
    <div className='wrapper'>
      <Header/>
        <main className='container'>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
