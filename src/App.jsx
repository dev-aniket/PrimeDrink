import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import Wrapper from './components/Wrapper'
import PrimeIce from './components/PrimeIce'
import Footer from './components/Footer'

const App = () => {
    const lenis = useLenis((lenis) => {
    console.log(lenis)
  })

  return (
    <>
         <ReactLenis root />
         <div>
            <Navbar />
            <Home />
            <Wrapper />
            <Product />
            <PrimeIce />
            <Footer />
         </div>
    </>
  )
}

export default App