import { CustomLink as Button } from './Button';
import { useRouteError } from 'react-router';

const Error = () => {
  const { message, status, statusText } = useRouteError();

  return (
    <>
      <section className='container mx-auto content-center'>
        <div className='p-4 md:p-6'>
          <h1 className='text-2xl font-bold text-left mb-8 md:text-3xl'>
            Error: {message}
          </h1>

          <pre>
            {status} - {statusText}
          </pre>
          <Button to='/' className='bg-black text-white font-semibold block'>
            Return to home
          </Button>
        </div>
      </section>
    </>
  );
};

export default Error;
