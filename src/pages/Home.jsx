import CustomLink from '../components/Button';

const Home = () => {
  return (
    <>
      <section className='flex-1'>
        <div className='bg-black/20 bg-[url(/home-hero.png)] bg-blend-overlay bg-no-repeat bg-cover bg-center rounded-md p-8 content-center text-left text-white space-y-4 h-4/5'>
          <h1 className='text-3xl font-bold md:text-4xl'>
            You got the travel plans, we got the travel vans.
          </h1>

          <p className='text-md md:text-lg'>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>

          <CustomLink to='/vans'>Find your van</CustomLink>
        </div>
      </section>
    </>
  );
};

export default Home;
