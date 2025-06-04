import React from 'react'
import './intro.css';
import bg from '../../assets/Teja.png'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className='introcontent'>
        <span className='hello'>Hello</span>
        <span className='hello'>I'm <span className='introName'>Teja</span><br />FullStack Web Developer</span>
        <p className='intropara'>I am skilled web developer and having experience in designing a responsive website </p>
        <a
          href='https://www.linkedin.com/in/v-teja'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <button className='btn'>
            <img src={btnImg} alt='Hire me' className='btnImg' />Hire me
          </button>
        </a>
      </div>
      <div className="image-wrapper">
        <img src={bg} alt='' className='bg' />
        <div className="rotating-ring"></div>
      </div>
    </section>
  )
}

export default Intro
