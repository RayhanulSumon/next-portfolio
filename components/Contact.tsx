'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (form.current && !isSubmitting) {
      setIsSubmitting(true);
      
      try {
        await emailjs.sendForm(
          'service_te80yto',
          'template_63gs1zs',
          form.current,
          '-wFNEur3LfVmL3pQ_'
        );

        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        if (form.current) {
          form.current.reset();
        }
      } catch (error) {
        console.error('Email send error:', error);
        toast.error('Failed to send message. Please try again later.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-md">
      <div className="mb-6">
        <label htmlFor="name" className="block font-semibold text-gray-900 dark:text-white mb-2 text-sm">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block font-semibold text-gray-900 dark:text-white mb-2 text-sm">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block font-semibold text-gray-900 dark:text-white mb-2 text-sm">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          placeholder="What's this about?"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block font-semibold text-gray-900 dark:text-white mb-2 text-sm">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[120px] resize-y"
          placeholder="Tell me about your project or just say hello..."
          rows={5}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-4 rounded-xl font-semibold text-base cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default Contact;