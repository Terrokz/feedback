import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
  <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>To jest aplikacja napisana w Reakcie na podstawie kursu "React Front To Back 2022"</p>
        <Link to='/'> Powrót do strony głównej</Link>
      </div>
      
  </Card>
    
  )
}

export default AboutPage