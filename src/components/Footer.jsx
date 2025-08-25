import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear().toString();

  return (
    <footer className='bg-[#161616] h-28 text-[#aaaaaa] content-center text-center mt-auto'>
      <p>
        &copy; {date} Made with 💜 by{' '}
        <Link
          to='https://github.com/specialbrocoli'
          target='_blank'
          className='text-violet-500 hover:underline underline-offset-4'
        >
          specialbrocoli {'</>'}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
