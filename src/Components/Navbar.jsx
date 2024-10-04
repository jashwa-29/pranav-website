import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'fixed   bg-white shadow-md' : ' absolute bg-transparent'} inset-x-0 top-0 z-50 transition-all ease-linear `}>
      <div className='lg:w-11/12 w-full mx-auto'>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" className={`flex text-[22px] font-semibold font-mono ${isScrolled ? 'text-black' : 'text-white'}`}>
                Suhrit
              </a>
            </div>

            <button
              type="button"
              className={`inline-flex p-2 transition-all duration-200 rounded-md lg:hidden ${isScrolled ? 'text-black' : 'text-white'} focus:bg-gray-100 hover:bg-gray-100`}
              onClick={() => setIsMobile(!isMobile)}
            >
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="/" className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${isScrolled ? 'text-black' : 'text-white'}`}>HOME</a>
              <a href="/about" className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${isScrolled ? 'text-black' : 'text-white'}`}>ABOUT US</a>
              <a href="#" className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${isScrolled ? 'text-black' : 'text-white'}`}>SERVICES</a>
              <a href="#" className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${isScrolled ? 'text-black' : 'text-white'}`}>PORTFOLIO</a>
              <a href="#" className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${isScrolled ? 'text-black' : 'text-white'}`}>BLOG</a>
            </div>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              {/* <button>
                {
                  isMobile ? <svg className='w-6 h-auto' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="black" />
                    <rect x="20.5" y="0.5" width="13" height="13" rx="1.5" stroke="black" />
                    <rect x="0.5" y="20.5" width="13" height="13" rx="1.5" stroke="black" />
                    <rect x="22" y="26" width="10" height="2" rx="1" fill="black" />
                  </svg> : <svg className='w-6 h-auto' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="white" />
                    <rect x="20.5" y="0.5" width="13" height="13" rx="1.5" stroke="white" />
                    <rect x="0.5" y="20.5" width="13" height="13" rx="1.5" stroke="white" />
                    <rect x="22" y="26" width="10" height="2" rx="1" fill="white" />
                  </svg>
                }
              </button> */}
              <a
                href="#"
                className={`inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full border-[1px] ${isScrolled ? 'text-black border-black' : 'text-white border-white'}`}
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden flex flex-col items-center justify-center gap-3 bg-white w-full h-auto py-7 fixed top-16 left-0 transition-transform duration-500 text-black ${isMobile ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <a href="#" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">HOME</a>
          <a href="#" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">ABOUT US</a>
          <a href="#" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">SERVICES</a>
          <a href="#" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">PORTFOLIO</a>
          <a href="#" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">BLOG</a>
          <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-transparent text-black border-[1px] border-black">
            CONTACT US
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
