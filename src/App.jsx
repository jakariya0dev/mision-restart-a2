import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import TicketsDashboard from './components/TicketsDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <main className='min-h-screen max-w-10/12 mx-auto my-10'>
        <Banner />
        <TicketsDashboard />
      </main>
      <Footer />
    </div>
  )
}

export default App
