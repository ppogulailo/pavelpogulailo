'use client';

import Link from 'next/link';
// import { menuItems } from '@/data/constants';
import { NavLink } from './navlink';
import { Fragment, useState } from 'react';

// components

export function NavBar() {
    let [isOpen, setIsOpen] = useState(false); // state of mobile menu

    return (
        <>
            {/*
        Place nav inside header
      */}
            <header className='container flex items-center justify-between px-4 py-4 mx-auto font-semibold leading-6 lg:py-6'>
                <Link className='transition duration-300 text-primary text-hover' href='/'>
                    <svg
                        className='inline mb-1 stroke-current text-primary-500'
                        xmlns='http://www.w3.org/2000/svg'
                        width='36'
                        height='36'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M0 0h24v24H0z' stroke='none'></path>
                        <path d='M12 4L4 8l8 4 8-4-8-4M4 12l8 4 8-4M4 16l8 4 8-4'></path>
                    </svg>{' '}
                    Creative Company
                </Link>
                <div className='flex items-center'>
                    {/* <button
                type="button"
                className="flex items-center justify-center w-8 h-8 -my-1 text-primary md:hidden text-hover"
              >
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button> */}
                    <div className='ml-2 -my-1 -mr-1'>
                        <button
                            type='button'
                            onClick={() => setIsOpen(true)}
                            className='flex items-center justify-center w-8 h-8 transition duration-300 text-primary text-hover md:hidden focus:outline-none'
                        >
                            <span className='sr-only'>Navigation</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth={2}
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        </button>
                    </div>

                    {/*
            Main Nav
          */}
                    <nav className='hidden md:flex'>
                        <ul className='flex items-center space-x-8'>
                        {/*    {menuItems.map((item, index) => {*/}
                        {/*        return (*/}
                        {/*            <li key={`${index}`}>*/}
                        {/*                <NavLink href={item.path} exact className='transition duration-300 text-hover'>*/}
                        {/*                    {item.name}*/}
                        {/*                    {item.new ? (*/}
                        {/*                        <span className='ml-2 font-medium text-xs leading-5 rounded-full text-new px-2 py-0.5 '>*/}
                        {/*  New*/}
                        {/*</span>*/}
                        {/*                    ) : null}*/}
                        {/*                </NavLink>*/}
                        {/*            </li>*/}
                        {/*        );*/}
                        {/*    })}*/}
                            <li className='text-base'>
                                {/*<ThemeSwitch />*/}
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/*
        Pop over mobile menu
      */}
        </>
    );
}