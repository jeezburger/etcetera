import React from 'react';

const Nav = () => {
    return (
        <nav className="bg-black border-gray-200 dark:bg-black-900">
            <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="true" // Always set to true since menu is always open
                >
                    <span className="sr-only">Open main menu</span>


                </button>
                <div className="md:flex md:items-center md:justify-center"> {/* Remove conditional classes */}
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white md:text-gray-900 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 text-center"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white md:text-gray-900 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 text-center"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Nav;
