import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : " "}>
      <Head>
        <title>Hans Figo Portofolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 transition duration-500 ease-in-out dark:bg-darkBlueBG dark:text-gray-200'>
        <section>
          <div className='py-5 px-10 border-b w-full z-20 top-0 left-0 fixed dark:bg-darkBlueBG dark:bg-opacity-30 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 text-center border-gray-200'>
            <nav className=' flex justify-between '>
              <h1 className='text-xl font-semibold font-burtons justify-center'>HNZCLZ</h1>
              <ul className='flex items-center'>
                <li onClick={() => setDarkMode(!darkMode)} className='text-xl cursor-pointer'>
                  <BsFillMoonStarsFill />
                </li>
                <li>

                  <div className="HAMBURGER-ICON space-y-2 ml-8">
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-200"></span>
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-200"></span>
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-200"></span>
                  </div>

                </li>
                {/* <li>
                  <a className='font-semibold rounded-md ml-8 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg' href="#">Resume</a>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className='text-center py-28 '>
            <h2 className='font-bold text-4xl text-blue-500'>Claudio Hans Figo</h2>
            <h3 className='font-bold text-xl py-4 '>Developer and Wibu Stress</h3>
            <p className='leading-8 text-gray-500 dark:text-gray-400'>
              Hello i'm Figo, I'm Madoka Magica SuperFan,
              Interested in Software Engineering and System Security.
              Currently Studying in Amikom University of Yogyakarta.
            </p>
            <nav className='py-10'>
              <ul className='flex justify-center text-4xl gap-12 text-gray-500 dark:text-gray-400'>
                <li className='hover:text-darkBlue dark:hover:text-white'><BsLinkedin /></li>
                <li className='hover:text-darkBlue dark:hover:text-white'><BsGithub /></li>
                <li className='hover:text-darkBlue dark:hover:text-white'><BsDribbble /></li>
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
              Graduated from Informatic engineering of SMKN 2 Depok,
              Now Studying in AMIKOM University of Yogyakarta.
              Interested in Software Engineering and Cyber Security.
              Currently studying Flutter and Javascript.
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}
