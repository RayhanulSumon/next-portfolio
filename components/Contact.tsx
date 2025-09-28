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
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-blue-500/20 hover:border-gray-300 dark:hover:border-gray-500"
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-blue-500/20 hover:border-gray-300 dark:hover:border-gray-500"
          placeholder="your.email@example.com"
          required
        />
      </div>

      {/* Subject Input */}
      <div>
        <label htmlFor="subject" className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-blue-500/20 hover:border-gray-300 dark:hover:border-gray-500"
          placeholder="What's this about?"
          required
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="font-semibold text-gray-900 dark:text-white mb-3 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-blue-500/20 hover:border-gray-300 dark:hover:border-gray-500 min-h-[140px] resize-y"
          placeholder="Tell me about your project, ask a question, or just say hello..."
          rows={6}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/20 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none border border-transparent dark:border-blue-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Form Footer */}
      <div className="text-center pt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          I typically respond within 24 hours. Looking forward to hearing from you! 🚀
        </p>
      </div>
    </form>
  );
};

export default Contact;