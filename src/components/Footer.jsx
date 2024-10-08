import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-base-200 py-8'>
      <div className='container mx-auto px-4 text-center text-base-content'>
        <p>&copy; {new Date().getFullYear()} <span className='font-bold text-accent'>eventify.me</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
