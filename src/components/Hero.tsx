import React from 'react';
import Link from 'next/link';


const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white w-full h-full flex items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            ✨ Inspire and Be Inspired! ✨
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-mono font-thin text-gray-200">
            <svg height="800px" width="800px" className='inline w-5 h-5 mr-2 fill-gray-300 rotate-180' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <g>
                <path className="st0" d="M148.57,63.619H72.162C32.31,63.619,0,95.929,0,135.781v76.408c0,39.852,32.31,72.161,72.162,72.161h7.559
                  c6.338,0,12.275,3.128,15.87,8.362c3.579,5.234,4.365,11.898,2.074,17.811L54.568,422.208c-2.291,5.92-1.505,12.584,2.074,17.81
                  c3.595,5.234,9.532,8.362,15.87,8.362h50.738c7.157,0,13.73-3.981,17.041-10.318l61.257-117.03
                  c12.609-24.09,19.198-50.881,19.198-78.072v-107.18C220.748,95.929,188.422,63.619,148.57,63.619z"/>
                <path className="st0" d="M439.84,63.619h-76.41c-39.852,0-72.16,32.31-72.16,72.162v76.408c0,39.852,32.309,72.161,72.16,72.161h7.543
                  c6.338,0,12.291,3.128,15.87,8.362c3.596,5.234,4.365,11.898,2.091,17.811l-43.113,111.686c-2.291,5.92-1.505,12.584,2.09,17.81
                  c3.579,5.234,9.516,8.362,15.871,8.362h50.722c7.157,0,13.73-3.981,17.058-10.318l61.24-117.03
                  C505.411,296.942,512,270.152,512,242.96v-107.18C512,95.929,479.691,63.619,439.84,63.619z"/>
              </g>
            </svg>

            We’re thrilled to have you here. This is a space where you can discover and share powerful quotes that inspire and resonate. Whether you’re looking for a daily dose of motivation or want to contribute your own thoughts, you’ll find a supportive environment here. Join us in exploring the wisdom of others and connecting through the words that uplift us all.

            <svg height="800px" width="800px" className='inline w-5 h-5 ml-2 fill-gray-300' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <g>
                <path className="st0" d="M148.57,63.619H72.162C32.31,63.619,0,95.929,0,135.781v76.408c0,39.852,32.31,72.161,72.162,72.161h7.559
                  c6.338,0,12.275,3.128,15.87,8.362c3.579,5.234,4.365,11.898,2.074,17.811L54.568,422.208c-2.291,5.92-1.505,12.584,2.074,17.81
                  c3.595,5.234,9.532,8.362,15.87,8.362h50.738c7.157,0,13.73-3.981,17.041-10.318l61.257-117.03
                  c12.609-24.09,19.198-50.881,19.198-78.072v-107.18C220.748,95.929,188.422,63.619,148.57,63.619z"/>
                <path className="st0" d="M439.84,63.619h-76.41c-39.852,0-72.16,32.31-72.16,72.162v76.408c0,39.852,32.309,72.161,72.16,72.161h7.543
                  c6.338,0,12.291,3.128,15.87,8.362c3.596,5.234,4.365,11.898,2.091,17.811l-43.113,111.686c-2.291,5.92-1.505,12.584,2.09,17.81
                  c3.579,5.234,9.516,8.362,15.871,8.362h50.722c7.157,0,13.73-3.981,17.058-10.318l61.24-117.03
                  C505.411,296.942,512,270.152,512,242.96v-107.18C512,95.929,479.691,63.619,439.84,63.619z"/>
              </g>
            </svg>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="bg-gray-50 border-2 block rounded-lg px-12 py-3 text-md font-bold font-mono text-gray-900 hover:text-gray-50 hover:bg-transparent hover:border-gray-200 active:ring active:ring-gray-200 outline-none"
              href="/explore"
            >
              Explore Quotes
            </Link>
            <Link href="/share"
              className="bg-transparent border-2 block rounded-lg px-12 py-3 text-md font-bold font-mono text-gray-100 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-200 active:ring active:ring-gray-200 outline-none"
            >
              Share A Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
