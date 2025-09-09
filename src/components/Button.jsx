import { Link } from 'react-router';

export const CustomLink = ({ to, children, className = '', ...props }) => {
  return (
    <Link
      to={to}
      className={`bg-[#FF8C38] w-full p-2 h-10 rounded-md text-[#4D4D4D] text-center tracking-tighter block ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};
