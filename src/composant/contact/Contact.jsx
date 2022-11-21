import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{BsWhatsapp} from 'react-icons/bs'
import{RiMessengerLine} from 'react-icons/ri'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>stephanedou19@gmail.com</h5>
            <a href='mailto:stephanedou19@gmal.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>stephanedoungue</h5>
            <a href=''>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+237691041322</h5>
            <a href=''>Send a message</a>
          </article>
        </div>
        
        <form action=''>
          <input type="text" name='name' placeholder='your full name'required/>
          <input type="email" name='email' placeholder='your Email' required/>
          <textarea name="message" rows="7" placeholder='your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact
