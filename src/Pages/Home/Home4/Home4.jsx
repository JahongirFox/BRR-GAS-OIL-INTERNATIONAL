import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Home4.css'

export const Home4 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Home4'>
      <div className='Formalar' ref={form} onSubmit={sendEmail}>
        <p>Затрудняетесь с выбором? Заполните форму и <br /> мы перезвоним вам в ближайшее время</p>
        <div className='center-inpp'>
          <div className='Center-inp'>
            <div className='Inp-center'>
              <input placeholder='Как вас зовут?' type='text' name='user_name' className='responsive-input' required />
              <input placeholder='Ваш телефон номер!' type='tel' name='user_tel' className='responsive-input' required />
              <input placeholder='Ваш Email!' type='email' name='user_email' className='responsive-input' required />
              <input type='submit' value='Send' className='submit-btn' />
            </div>
          </div>
        </div>   
      </div>
    </div>
  );
};

export default Home4;