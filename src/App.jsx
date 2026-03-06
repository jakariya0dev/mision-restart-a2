import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TicketsDashboard from './components/TicketsDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <main className='min-h-screen max-w-10/12 mx-auto my-10'>
        <TicketsDashboard />
      </main>
      <Footer />
    </div>
  )
}

export default App
