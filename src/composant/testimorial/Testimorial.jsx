import React from 'react'
import './testimorial.css'
import Me from '../../assets/meg.jpg'
import Me1 from '../../assets/me.jpg'
import Me2 from '../../assets/ne.jpg'
import Me3 from '../../assets/nee.jpg'


const Testimorial = () => {
  return (
    <section id='testimorial'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <div className='container testimonial_container'>
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={Me} alt='Avatar One'/>
            </div>
            <h5 className='client_name'>Ernest Archiever</h5>
            <small className='client_review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequuntur quis reiciendis, nisi, recusandae odit dicta cum sapiente eum asperiores quos quia facilis earum suscipit. Itaque, suscipit perspiciatis. Optio, nam.
            </small>
        </article>
      
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={Me} alt='Avatar One'/>
            </div>
            <h5 className='client_name'>Ernest Archiever</h5>
            <small className='client_review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequuntur quis reiciendis, nisi, recusandae odit dicta cum sapiente eum asperiores quos quia facilis earum suscipit. Itaque, suscipit perspiciatis. Optio, nam.
            </small>
        </article>
      </div>
    </section >
  )
}

export default Testimorial
