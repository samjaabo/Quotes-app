import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

interface CardProps {
  id: number; 
  author: string;
  content: string;
  tags: string;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ id, author, content, tags, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleUpdateRedirect = () => {
    router.push(`/update/${id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full px-8 py-4 rounded-lg shadow-lg bg-gray-800">
      <div className="absolute top-3 right-3 z-20">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
          </svg>
        </button>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 bg-gray-600 shadow-lg rounded-md w-32"
          >
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-50 rounded-t-md hover:bg-green-600"
              onClick={handleUpdateRedirect}
            >
              Update
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-50 rounded-b-md hover:bg-red-600"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className='h-full flex flex-col'>
        <h2 className="mt-2 text-lg font-mono font-semibold text-gray-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">{author}</h2>
        <p className="mt-2 h-full font-bold font-mono text-xl text-gray-50">
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

          {content}

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
        <div className="flex justify-end mt-4">
          <span className="block text-sm font-thin font-mono text-gray-400 truncate max-w-xs" title={tags}>
            {tags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
