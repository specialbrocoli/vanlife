import { getVans } from '../../api';
import { Suspense } from 'react';
import { CustomLink as Button } from '../../components/Button';
import { Link, useSearchParams, useLoaderData, Await } from 'react-router';

export async function loader() {
  return { vans: getVans() };
}

const Vans = () => {
  const vansData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get('type');

  const getBadgeStyles = (type) => {
    const styles = {
      simple: 'bg-[#E17654] font-medium text-white rounded-lg py-2 px-4',
      luxury: 'bg-[#161616] font-medium text-white rounded-lg py-2 px-4',
      rugged: 'bg-[#115E59] font-medium text-white rounded-lg py-2 px-4',
    };

    return styles[type?.toLowerCase()] || '';
  };

  // handle filter logic
  const handleFilterChange = (key, value) => {
    const sp = new URLSearchParams(searchParams);
    if (!value) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }

    return `?${sp.toString()}`;
  };

  const renderVanEls = (vans) => {
    // mapping van elements from useLoaderData()
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;
    const vanEls = displayedVans.map((van) => (
      <Link
        to={`${van.id}`}
        key={van.id}
        className='block md:max-w-max md:h-[426px] rounded-sm'
      >
        <div className='w-full h-full md:w-80 md:h-80'>
          <img
            src={van.imageUrl}
            alt={`Image of ${van.name}`}
            className='object-cover h-full w-full rounded-md'
          />
        </div>

        <div className='px-4 py-2'>
          <div className='flex justify-between'>
            <h2>{van.name}</h2>
            <div>
              <p className='font-semibold'>
                <span>$</span>
                {van.price}
              </p>
              <span>/day</span>
            </div>
          </div>
          {/* van badge */}
          <span className={`${getBadgeStyles(van.type)}`}>{van.type}</span>
        </div>
      </Link>
    ));

    return (
      <>
        {/* filters container */}
        <div className='grid grid-cols-4 gap-4 items-center my-6 md:w-3/4 lg:w-1/2'>
          <Button
            to={handleFilterChange('type', 'simple')}
            className='bg-[#FFEAD0] font-normal active:bg-[#E17654] active:text-white transition-colors'
          >
            Simple
          </Button>
          <Button
            to={handleFilterChange('type', 'luxury')}
            className='bg-[#FFEAD0] font-normal active:bg-[#161616] active:text-white transition-colors'
          >
            Luxury
          </Button>
          <Button
            to={handleFilterChange('type', 'rugged')}
            className='bg-[#FFEAD0] font-normal active:bg-[#115E59] active:text-white transition-colors'
          >
            Rugged
          </Button>

          <Link
            to={handleFilterChange('type', null)}
            className='text-[#4D4D4D] underline underline-offset-4'
          >
            Clear filters
          </Link>
        </div>

        {/* vans container */}
        <div className='my-14 md:flex gap-6 flex-wrap justify-center'>
          {vanEls}
        </div>
      </>
    );
  };

  return (
    <section className='container mx-auto'>
      <div className='p-4 md:p-6'>
        <h1 className='text-3xl font-medium'>Explore our van options</h1>

        <Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={vansData.vans}>{(vans) => renderVanEls(vans)}</Await>
        </Suspense>
      </div>
    </section>
  );
};

export default Vans;
