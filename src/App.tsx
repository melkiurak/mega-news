import './App.css'
import { Header } from '@components/header/Header'
import { Slider } from '@components/slider/Slider'

function App() {

  return (
    <div className='wrapper'>
      <Header/>
      <main className='container'>
        <Slider/>
      </main>
    </div>
  )
}

export default App
