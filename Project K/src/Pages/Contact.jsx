import React, { Suspense, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Canvas } from '@react-three/fiber';
import Loader from '../compenents/Loader';
import Fox from '../models/Fox';
import useAlert from '../hooks/UseAlert';
import Alert from '../compenents/Alert';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        form_name: form.name,
        to_name: "SRIRAM",
        form_email: form.email,
        to_email: 'magicmoment806@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsLoading(false);
        showAlert({ show: true, text: 'Message Sent Successfully!', type: 'success' });

        setTimeout(() => {
          setCurrentAnimation('idle');
          setForm({ name: '', email: '', message: '' });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.log(error);
        showAlert({ show: true, text: "I didn't receive your message!", type: 'danger' });
      });
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      {/* Flex container to align the form on the left and Fox on the right */}
      <div className="flex w-full lg:flex-row flex-col">

        {/* Form section on the left */}
        <div className="flex-1 flex flex-col lg:w-1/2 w-full p-5">
          <h1 className='head-text'>Get in Touch</h1>

          <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
            <label className="text-black-500 font-semibold">
              Name
              <input
                type='text'
                name='name'
                className='input'
                placeholder='Sriram'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type='email'
                name='email'
                className='input'
                placeholder='sriram@gmail.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Message
              <textarea
                name='message'
                rows={4}
                className='textarea'
                placeholder='Let me know how I can help you!'
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type='submit'
              className='btn'
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Fox 3D model on the right */}
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
