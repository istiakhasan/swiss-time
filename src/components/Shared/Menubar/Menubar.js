import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom';
import {  MenuIcon, XIcon } from '@heroicons/react/outline'

const Menubar = () => {
    const navigation = [
        { name: 'Home', to: '/', current: true },
        { name: 'Team', to: '#', current: false },
        { name: 'Projects', to: '#', current: false },
        { name: 'About', to: '/about', current: false },
        { name: 'Order', to: '/order', current: false },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    return (
        <Disclosure  as="nav" className="bg-gray-800 sticky top-0 z-10">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                     {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )} 
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                   <h1 className='text-2xl font-bold text-white'>Swiss Time</h1>
                  
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link 
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                   
                    </div>
                  </div>
                </div>
                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link className='text-white mx-6 bg-gray-900 py-2 px-3 rounded-lg' to="/about">Login</Link>
                    {/* { user ?  <button onClick={logout} className='text-white bg-gray-400 px-4 '>Sign Out</button>:
                    
                    <Link className='text-white ' to="/login">Login</Link>
                    } */}
                    
                </div> 
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
};

export default Menubar;