import React from 'react'
import About from '../components/About'
import MainSection from '../components/MainSection'
import WhyUs from '../components/WhyUs'

function HomePage() {
  return (
    <main>
        <MainSection showForm={true}/>
        <About/>
        <WhyUs/>
    </main>
  )
}

export default HomePage