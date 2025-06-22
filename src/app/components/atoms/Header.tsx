export const Header = () => {
  return (
    <header className='fixed flex h-16 w-full items-center justify-center border-b border-gray-100 bg-white/75 backdrop-blur-md'>
      <nav className='flex px-4 md:w-[80rem]'>
        <span className='text-lg font-bold'>
          TODO<span className='font-light'>APP</span>
        </span>
      </nav>
    </header>
  );
};
