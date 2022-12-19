import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsBehance} from 'react-icons/bs';
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : " "}>
      <Head>
        <title>Hans Figo Portofolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className='bg-white px-10 transition duration-500 ease-in-out dark:bg-darkBlueBG dark:text-gray-200 font-poppins'>
        <section>
          <div className='py-5 px-10 border-b w-full z-20 top-0 left-0 fixed dark:bg-darkBlueBG dark:bg-opacity-30 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 text-center border-gray-200'>
            <nav className=' flex justify-between '>
              <h1 className='text-xl font-semibold font-burtons justify-center'>HNZCLZ</h1>
              <ul className='flex items-center'>
                <li onClick={() => setDarkMode(!darkMode)} className={!isNavOpen ? 'text-xl cursor-pointer dark:text-blue-500' : ''}>
                  <BsFillMoonStarsFill />
                </li>
                {/* <li>
                  <div className={!isNavOpen ? 'HAMBURGER-ICON lg:hidden space-y-2 ml-8' : 'hidden'} onClick={() => setIsNavOpen((prev) => !prev)}>
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-200"></span>
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-200"></span>
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-200"></span>
                  </div>
                  <div className={isNavOpen ? "flex justify-evenly flex-col py-4 items-stretch" : "hidden transition duration-500 ease-in-out"}>
                    <div
                      className="CROSS-ICON absolute top-0 right-0 px-8 py-4 cursor-pointer"
                      onClick={() => setIsNavOpen(false)}
                    >
                      <svg
                        className="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-center  bg-red-100 py-10">
                      <li className="border-b border-gray-400 my-8 uppercase">
                        <a href="/about">About</a>
                      </li>
                      <li className="border-b border-gray-400 my-8 uppercase">
                        <a href="/portfolio">Portfolio</a>
                      </li>
                      <li className="border-b border-gray-400 my-8 uppercase">
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li>
                  <a className='font-semibold rounded-md ml-8 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg' href="#">Resume</a>
                </li> */}
              </ul>
            </nav>
          </div>

          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 50vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
          <div className='text-center py-28 '>
            <h2 className='font-bold text-3xl text-blue-500'>Claudio Hans Figo</h2>
            <h3 className='font-bold text-xl py-4 text-darkBlue dark:text-gray-200'>Developer and Wibu Stress</h3>
            <p className='leading-8 text-gray-500 dark:text-gray-400'>
              Hello <span className='font-bold text-blue-500 dark:text-gray-200'>i'm Figo</span>, I'm Madoka Magica SuperFan,
              Interested in <span className='font-bold text-blue-500 '>Software Engineering</span> and <span className='font-bold text-blue-500' >System Security</span>.
            </p>
            <nav className='py-10'>
              <ul className='flex justify-center text-4xl gap-12 text-gray-500 dark:text-gray-400'>
                <li className='hover:text-blue-500 dark:hover:text-white transition duration-500 ease-in-out'><a href="https://www.linkedin.com/in/claudio-hans-figo-bbb872203/"><BsLinkedin/></a>
                </li>
                <li className='hover:text-darkBlue dark:hover:text-white transition duration-500 ease-in-out'><a href="https://github.com/hansfigo"><BsGithub /></a></li>
                <li className='hover:text-blue-500 dark:hover:text-white transition duration-500 ease-in-out'><a href="https://www.behance.net/hans_figo"><BsBehance /></a></li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-3/4 sm:w-4/12 px-4 py-8">
              <img src="ryo_avatar.jpg" class=" shadow-avatar dark:shadow-teal-800 rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>
          <div className='py-10'>
            <h3 className='text-blue-500 font-bold text-xl dark:drop-shadow-md dark:shadow-blue-600'>About me</h3>
            <h2 className='font-bold text-2xl py-2'>Let's be a Friend !!</h2>
            <p className='leading-8 text-gray-500 py-2  dark:text-gray-400'>
              Graduated from <span className='font-bold text-blue-500'>Informatic Engineering</span> of <span className='font-bold text-blue-500'>SMKN 2 Depok</span> Vocational School,
              Now Studying in <span  className='font-bold text-blue-500'> AMIKOM University</span> of Yogyakarta.
              Interested in Software Engineering and Cyber Security.
              Currently studying <span className='font-bold text-blue-500'>Flutter</span> and <span className='font-bold text-blue-500'>Javascript</span>.
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}
