import { useState } from 'react'
import './App.css'
import Navbars from './components/Navbars'
import Hero from './components/Hero'
import Mainone from './components/Mainone'
import Service from './components/Service'
import Excellence from './components/Excellence'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbars></Navbars>
    <Hero></Hero>
    <Mainone></Mainone>
    <Service></Service>
    <Excellence></Excellence>
    <Contactus></Contactus>
    <Footer></Footer>
    </>
  )
}

export default App
