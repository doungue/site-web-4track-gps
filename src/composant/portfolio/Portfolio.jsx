import React from 'react'
import './portfolio.css'
import IMG from '../../assets/port.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'
import IMG4 from '../../assets/port4.jpg'
import IMG1 from '../../assets/port1.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='http://github.com'className='btn'>Github</a>
          <a href='http://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='http://github.com'className='btn'>Github</a>
          <a href='http://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='http://github.com'className='btn'>Github</a>
          <a href='http://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='http://github.com'className='btn'>Github</a>
          <a href='http://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='http://github.com'className='btn'>Github</a>
          <a href='http://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='http://github.com'className='btn'>Github</a>
          <a href='http://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
      </div>
    </section >
  )
}

export default Portfolio
