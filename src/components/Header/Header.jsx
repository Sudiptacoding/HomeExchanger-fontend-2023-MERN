import React, { useContext } from 'react';
import DarkMood from '../../common/DarkMood';
import Headroom from 'react-headroom';
import { Link, NavLink } from 'react-router-dom';
import SearchData from '../../common/SearchData';
import { UserProvider } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';

const Header = () => {
    const { logOut, user, userPhoto } = useContext(UserProvider)
    const axiosAuth = useAxios()
    const handelLogOut = () => {
        logOut()
            .then(() => {
                axiosAuth.get('/cookedelet')
                    .then(() => {
                        toast.success('Log out Successfully !')
                    })
            }).catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Headroom>
                <header className="z-50 flex flex-wrap w-full py-3 text-sm bg-white border-b border-gray-200 sm:justify-start sm:flex-nowrap sm:py-0 dark:bg-gray-800 dark:border-gray-700">
                    <nav className="relative w-full px-4 mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                        <div className="flex items-center justify-between">
                            <Link to='/' className="flex-none text-lg font-extrabold text-gray-600 dark:text-white " aria-label="Brand">Home🏠Exchanger</Link>
                            <div className="sm:hidden">
                                <button type="button" className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                    <svg className="w-4 h-4 hs-collapse-open:hidden" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                    <svg className="hidden w-4 h-4 hs-collapse-open:block" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="navbar-collapse-with-animation" className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block">
                            <div className={`flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-[24.75rem]`}>
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium text-blue-600 sm:py-6 dark:text-blue-500" : "font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                    }


                                    to='/' aria-current="page">Home</NavLink>


                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium text-blue-600 sm:py-6 dark:text-blue-500" : "font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                    }
                                    to='/allservices'
                                >Services</NavLink>

                                {
                                    user && <div className="hs-dropdown z-50 [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                                        <button type="button" className="flex items-center w-full font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ">
                                            Dashboard
                                            <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                            </svg>
                                        </button>

                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                                            <NavLink to='/myservices'
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300" : "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                }
                                            >
                                                My-services
                                            </NavLink>
                                            <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                                <button type="button" className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                                    My Schedules
                                                    <svg className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                                    </svg>
                                                </button>

                                                <div className="hs-dropdown-menu  transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-20 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                                    <NavLink to='/mybookings'
                                                        className={({ isActive, isPending }) =>
                                                            isPending ? "pending" : isActive ? "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300" : "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                        }
                                                    >
                                                        My Bookings
                                                    </NavLink>
                                                    <NavLink to='/mypainding'
                                                        className={({ isActive, isPending }) =>
                                                            isPending ? "pending" : isActive ? "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300" : "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                        }
                                                    >
                                                        My Pending works
                                                    </NavLink>
                                                </div>
                                            </div>

                                            <NavLink
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300" : "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                }
                                                to='/addservices' >
                                                Add-services
                                            </NavLink>
                                        </div>
                                    </div>
                                }


                                {/* End part */}

                                <div className="flex items-center justify-center cursor-pointer gap-x-5 sm:ml-auto">
                                    {
                                        user && <a data-hs-overlay="#hs-overlay-top" className="flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500" >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </a>
                                    }

                                    <a className="flex items-center font-medium text-gray-500 cursor-pointer gap-x-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500" >
                                        <DarkMood></DarkMood>
                                    </a>

                                    {
                                        user ? <a className="flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500" >
                                            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                                <button id="hs-dropdown-with-header" type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                                                    <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src={user?.photoURL || userPhoto} alt="Image Description" />
                                                </button>

                                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-with-header">
                                                    <div className="px-5 py-3 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                                                        <p className="pt-3 text-sm font-normal text-gray-800 dark:text-gray-300">{user?.displayName}</p>
                                                        <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{user?.email}</p>
                                                    </div>
                                                    <div className="py-2 mt-2 first:pt-0 last:pb-0">

                                                        <Link onClick={handelLogOut} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                            </svg>
                                                            Log Out
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </a> : <Link to='/login' className="flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>
                                            Log in
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </Headroom>
            {/* Search modal */}
            <div id="hs-overlay-top" className="hs-overlay hs-overlay-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-40 h-full w-full z-[60] bg-white border-b dark:bg-gray-800 dark:border-gray-700 hidden" tabIndex="-1">
                <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                        Search Your Item
                    </h3>
                    <button id='closes' type="button" className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-gray-500 rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-overlay-top">
                        <span className="sr-only">Close modal</span>
                        <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-center p-4">
                    <SearchData></SearchData>
                </div>
            </div>

        </div>
    );
};

export default Header;