import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className='mt-10 text-center'>
      <h1 className='text-white mb-2 text-7xl font-bold'>
        Find your table for any occasion{' '}
      </h1>
      <SearchBar />
    </div>
  );
};

export default Header;
