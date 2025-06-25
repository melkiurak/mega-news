import './App.css'
import { Header } from '@components/header/Header'
import { Slider } from '@components/slider/Slider'
import { PopularPost } from '@components/Posts/PopularPost/PopularPost'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='wrapper'>
      <Header/>
      <main className='container'>
      </main>
      <Footer/>
    </div>
  )
}

export default App
