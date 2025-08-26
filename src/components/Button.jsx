import { Link } from 'react-router-dom';

const CustomLink = ({ to, children, className = '', ...props }) => {
  return (
    <Link to={to} className={`bg-[#FF8C38] w-full p-2 h-10 rounded-md text-center block ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;