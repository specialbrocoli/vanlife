import { CustomLink as Button } from './Button';

const NotFound = () => {
  return (
    <section className='container mx-auto content-center'>
      <div className='p-4 md:p-6'>
        <h1 className='text-2xl font-bold my-8 md:text:3xl'>
          Sorry, the page you were looking for was not found.
        </h1>
        <Button className='bg-black text-white' to='/'>
          Return to Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
