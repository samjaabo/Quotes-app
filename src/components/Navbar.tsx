import React from 'react';
import Link from 'next/link';

interface ExploreNavbarProps {
    linkHref: string;
    activeLink: boolean;
}

const ExploreNavbar: React.FC<ExploreNavbarProps> = ({ linkHref, activeLink }) => {
    return (
        <nav className="w-full bg-transparent flex justify-around items-center box-border pb-0.5 pt-4" aria-label="Tabs">
            <Link
                href={linkHref}
                className="shrink-0 rounded-full p-2 bg-gray-700 text-gray-100 hover:bg-gray-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4 4m-4-4l4-4" />
                </svg>
            </Link>

            {activeLink && <Link
                href="/share"
                className="shrink-0 rounded-full p-2 bg-gray-700 text-gray-100 hover:bg-gray-600"
                aria-current="page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </Link>}
        </nav>
    );
};

export default ExploreNavbar;
