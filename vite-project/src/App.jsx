import React from 'react'
import PrimarySearchAppBar from './ResponsiveAppBar'
import Carasol from './Carasol'
import Hero from './Hero'
import Cards from './Cards'
import Cardss from './Cardss'
import Banner from './Banner'
import HeroSection from './heroSection'
import Section_f from './Section_f'
import Section_s from './Section_s'
import Second_banner from '../../Second_banner'
import Footer from '../../Footer'
const App = () => {
  return (
    <div>
      <PrimarySearchAppBar/>
      <Hero/>
      <Carasol/>
      <Cards/>
      <Cardss/>
      <Banner/>
      <HeroSection/>
      <Section_f/>
      <Section_s/>
      <Second_banner/>
      <Footer/>
    </div>
  )
}

export default App
