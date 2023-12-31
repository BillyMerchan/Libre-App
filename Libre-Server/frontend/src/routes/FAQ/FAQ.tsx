import React from 'react'
import NavBar from '../../components/NavBar/Navbar'
import "./FAQ.css"

export default function FAQ() {
  return (
    <div>
    <NavBar/>
      <div className='FAQ'>
          <div className='title'>
            <h1>
                Frequently Asked Questions
            </h1>
          </div>
          <div className='Q'>
              Q: <span className='input'> Who created Libre? </span>
          </div>
          <div className='A'>
              A:  <span className='input'> Libre was created by Billy Merchan, Daniela Liang, and Rachel Tsui </span>
          </div>
          <div className='Q'>
              Q: <span className='input'> Libre is super cool </span>
          </div>
          <div className='A'>
              A:  <span className='input'> Yes </span>
          </div>
        </div>
    </div>

  )
}