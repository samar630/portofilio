import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {BsMessenger,BsWhatsapp} from'react-icons/bs';
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_z8milc4', 'template_7yoekn8', form.current, 'oHadp6--rVbjiQu3e')
            e.target.reset()
    };
    return(
        <section id='contact'>
           <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option__icon'/>
                    <h2>Email</h2>
                    <h3 style={{fontSize:'small'}}>samarkaddour589@gamil.com</h3>
                    <a href='mailto:samarkaddour589@gamil.com' target='_blank' rel="noreferrer">Send a message</a>
                </article>
                <article className='contact__option'>
                    <BsMessenger className='contact__option__icon'/>
                    <h2>Messanger</h2>
                    <h3>Samar Qaddour</h3>
                    <a href='https://m.me/' target='_blank' rel="noreferrer">Send a message</a>
                </article>
                <article className='contact__option'>
                    <BsWhatsapp className='contact__option__icon'/>
                    <h2>Whatsapp</h2>
                    <h3>+963980276738</h3>
                    <a href='https://api.whatsapp.com/send?phone=00963980276738' target='_blank' rel="noreferrer">Send a message</a>
                </article>
            </div>
              <form ref={form} onSubmit={sendEmail}>
                  <input type='text' name='name' required placeholder='Your Full Name' />
                  <input type='email' name='email' required placeholder='Your Email' />
                  <textarea required placeholder='your Message' name='message' rows='7'></textarea>
                  <button className='btn btn-primary' type='submit' name='message'>Send Message</button>
              </form>
           </div>
        </section>
    )
}
export default Contact;