import './App.css'
import { Header } from '@components/header/Header'
import { Slider } from '@components/slider/Slider'
import { PopularPost } from '@components/Posts/PopularPost/PopularPost'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className='wrapper'>
      <Header/>
        <main className='container'>
          <Outlet/>
        </main>
    </div>
  )
}

export default App
