import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const navLinks = [
    // { name: 'Host', path: '/host' },
    { name: 'Vans', path: '/vans' },
    { name: 'About', path: '/about' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='flex justify-between items-center px-3 py-4'>
        {/* logo */}
        <Link
          to='/'
          className='uppercase font-bold text-2xl hover:underline underline-offset-4'
        >
          #VanLife
        </Link>

        {/* navbar menu */}
        <nav>
          <ul className='hidden md:flex font-normal gap-4'>
            {navLinks.map((link) => (
              <li key={link.name} className='p-2 text-lg'>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'underline underline-offset-4' : null
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* toggling menu on mobile */}
        <button onClick={() => toggleMenu(!isOpen)} className='md:hidden z-10'>
          {!isOpen ? (
            <AiOutlineMenu size={28} color='#FF8C38' />
          ) : (
            <AiOutlineClose size={28} color='#FF8C38' />
          )}
        </button>
      </header>

      {/* mobile menu */}
      <div
        className={
          isOpen
            ? 'flex flex-col items-center justify-center min-h-screen bg-black/50 backdrop-blur-2xl absolute top-0 right-0 w-full sm:hidden'
            : 'hidden'
        }
      >
        {/* logo */}
        <Link
          to='/'
          onClick={() => setIsOpen(false)}
          className='uppercase font-bold text-3xl hover:underline underline-offset-4 text-[#FF8C38]'
        >
          #VanLife
        </Link>

        {/* menu */}
        <nav>
          <ul className='flex flex-col items-center mt-6'>
            {navLinks.map((link) => (
              <li key={link.name} className='p-4'>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className='text-white text-xl'
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
