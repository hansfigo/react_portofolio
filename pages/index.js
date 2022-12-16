import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';


export default function Home() {
  return (
    <>
      <Head>
        <title>Hans Figo Portofolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section>
          <div className='py-6 px-10 border-b w-full z-20 top-0 left-0 fixed bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 text-center border-gray-200'>
            <nav className=' flex justify-between '>
              <h1 className='text-xl font-semibold font-burtons justify-center'>FigoMager</h1>
              <ul className='flex items-center'>
                <li className='text-xl cursor-pointer'>
                  <BsFillMoonStarsFill />
                </li>
                <li>
                  <a className='font-semibold rounded-md ml-8 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg' href="#">Resume</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='text-center py-28'>
            <h2 className='font-bold text-4xl text-blue-500'>Claudio Hans Figo</h2>
            <h3 className='font-bold text-xl py-4 '>Developer and Wibu Stress</h3>
            <p className='leading-8 text-gray-500'>
              Hello i'm Figo, I'm Madoka Magica SuperFan,
              Interested in Software Engineering and System Security.
              Currently Studying in Amikom University of Yogyakarta.
            </p>
            <nav className='py-10'>
              <ul className='flex justify-center text-4xl gap-12 text-gray-500 '>
                <li className='hover:text-darkBlue'><BsLinkedin /></li>
                <li className='hover:text-darkBlue'><BsGithub /></li>
                <li className='hover:text-darkBlue'><BsDribbble /></li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-3/4 sm:w-4/12 px-4 py-8">
              <img src="ryo_avatar.jpg" class="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>
          <div className='py-10'>
            <h3 className='font-bold text-xl py-4 '>About me</h3>
            <p className='leading-8 text-gray-500'>
              Graduated from Informatic engineering of SMKN 2 Depok,
              Now Studying in AMIKOM University of Yogyakarta.
              Interested in Software Engineering and Cyber Security.
              Currently studying Flutter and Javascript.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
