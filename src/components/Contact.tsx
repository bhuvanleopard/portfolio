
import React, { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { CiLinkedin, CiMail, CiPhone } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(' ');

  // Get these values from your EmailJS account dashboard
  const SERVICE_ID = 'service_390d8k4'
  const TEMPLATE_ID = 'template_wonnzhg'
  const PUBLIC_KEY = '6X2H46xgVptVOO-F_'

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent default form reload
    setIsSending(true);
    setStatusMessage('Sending...');

    // Create a template parameters object
    // The keys (e.g., 'from_name') must match the variables in your EmailJS template
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('MESSAGE SENT SUCCESSFULLY!');
        setIsSending(false);
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatusMessage('Failed to send message. Please try again.');
        setIsSending(false);
      });
  };

  return (

    <div id="contact"
      className='
        w-[100%] h-[100vh] min-h-fit p-[16px] lg:p-[32px]
        flex flex-col items-center
        pt-[4rem] 
        backdrop-blur-md
        bg-white/1'>
      
          
      <div className='w-full text-left pb-[32px] pt-4'>
        <span className='rounded-md font-extrabold text-base md:text-xl section-title'>
          LET'S CONNECT !!!
        </span>
      </div>

      <div className="text-lg w-full max-w-lg flex justify-between p-[16px] rounded-md bg-white/2 items-center">
            <a
                href="https://github.com/bhuvanleopard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:scale-110 transition-transform hover:text-cyan-200"
            >
                <VscGithubAlt/>
            </a>

            <a
                href="mailto:cbhuvan08@gmail.com"
                className="text-4xl hover:scale-110 transition-transform hover:text-amber-200"
            >
                <CiMail/>
            </a>
            <a
                href="tel:+919284169303"
                className="text-4xl hover:scale-110 transition-transform hover:text-amber-200"
            >
                <CiPhone/>
            </a>
            <a
                href="https://www.linkedin.com/in/bhuvan-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:scale-110 transition-transform hover:text-amber-200"
            >
                <CiLinkedin/>
            </a>
        </div>

    <div className="w-full max-w-lg shadow-lg rounded-md">

      <div className='w-full text-center pt-[64px] pb-[16px]'>
        <span className='rounded-xl font-extrabold text-base'>
          send me your message...
        </span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className=''>
          <label htmlFor="name" className="block text-base font-bold">
            NAME:
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-3 border-1 border-gray-300/25 rounded-md shadow-sm focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-bold">
            EMAIL:
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-3 border-1 border-gray-300/25 rounded-md shadow-sm focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-base font-bold">
            MESSAGE:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full p-3 border-1 border-gray-300/25 rounded-md shadow-sm focus:ring-blue-500"
          />
        </div>
        <div className='w-[100%] flex justify-center py-4'>
          <button
            type="submit"
            disabled={isSending}
            className="
              w-[100%]
              p-2 px-8
              text-center
              nav-bar-item
              hover:scale-95
              border-gray-300/50
              hover:border-cyan-100
              disabled:bg-gray-400 "
          >
            {isSending ? 'SENDING...' : 'SEND'}
          </button>
        </div>
        {statusMessage && (
          <p className="text-center text-base p-[2px] h-[2rem] ">{statusMessage}</p>
        )}
      </form>
    </div>

    </div>
  );
};

export default ContactMe;