import './App.css'
import Navbar from '../components/Navbar'
import Urlinput from '../components/Urlinput'
import Passwords from '../components/passwords'

function App() {

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center p-10 gap-20'>

        <Urlinput />
        <Passwords />
      </main>
    </>
  )
}

export default App
