import React from 'react'
import { Footer, Header } from './Components'
import { About, Certificate, Contact, Hero, Projects } from './Pages'



function App() {
 
  return (
   
    <div className="bg-site overflow-hidden">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  
  )
}

export default App