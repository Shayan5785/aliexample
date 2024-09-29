import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Container from './components/Container'
import BadgeContainer from './components/BadgeContainer'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { ContactUs } from './components/ContactUs'


const App = () => {

  return (
    <div className='bg-[#fffce5]'>
      <Navbar />
      <Hero />
      <Container />
      <Testimonials />
      <BadgeContainer />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App