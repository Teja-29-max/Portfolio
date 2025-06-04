import React, { useRef } from 'react';
import './contact.css';
import InstagramIcon from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.webp';
import Gmail from '../../assets/gmail.webp';
import GitHub from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_x8wsstj',
      'template_j3k1c5w',
      form.current,
      'V7dK2YEn-Cghb6XSW'
    )
    .then((result) => {
      console.log('Email sent:', result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log('Email failed:', error.text);
      alert('Something went wrong!');
    });

    e.target.reset();
  };

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            className='name'
            placeholder='Your Name'
            name='your_name'
            required
          />
          <input
            type='email'
            className='email'
            placeholder='Your Email'
            name='your_email'
            required
          />
          <textarea
            className='msg'
            name='message'
            rows='5'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href='https://www.instagram.com/te_ja3751' target='_blank' rel='noopener noreferrer'>
              <img src={InstagramIcon} alt='Instagram' className='link' />
            </a>
            <a href='https://www.linkedin.com/in/v-teja' target='_blank' rel='noopener noreferrer'>
              <img src={Linkedin} alt='LinkedIn' className='link linkedin-logo' />
            </a>
            <a href='mailto:118teja@gmail.com.com'>
              <img src={Gmail} alt='Gmail' className='link' />
            </a>
            <a href='https://github.com/Teja-29-max' target='_blank' rel='noopener noreferrer'>
              <img src={GitHub} alt='GitHub' className='link' />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
