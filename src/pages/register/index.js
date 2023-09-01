import React from 'react'
import { Link } from 'react-router-dom'
import{Button} from'../../components/Button';
let Register = () => {
    let onSubmit = (event) => {
        event.preventDefault()
        console.log("data", event);
    }


    return (

        <>


            <nav className="bg-zinc-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center text-white">
                                <img className="h-8 w-auto" src="https://pbs.twimg.com/profile_images/1349694499497406467/21ofPu1U_400x400.jpg" alt="Your Company" />
                                <p className="ml-3  text-blue-900 font-bold text-2xl italic">  Enigmatix</p>

                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                                    <div className=" pl-80">
                                        <button
                                            type="button"
                                            className="text-white bg-blue-900 hover:bg-blue-400   font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 ml-40 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >

                                            Log In
                                        </button>
                                        <button
                                            type="button"
                                            className="text-white bg-gray-900 hover:bg-sky-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 ml-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>

                </div>
            </nav>


            <div className="bg-gray-00 w-full flex justify-center items-center  min-h-screen">

                <div className="w-full max-w-lg " >
                    <form onSubmit={onSubmit}
                        className="bg-zinc-500 rounded xl:rounded-xl shadow-md rounded px-8 pt-6 pb-8 mb-4 " >

                        <h3 className="text-center font-extrabold text-3xl text-yellow-400 mb-6">Register</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                First Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Last Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password

                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />

                        </div>
                        <div className="flex items-center justify-between">
                            <Button 
                            type="submit"
                            size="large"
                            className="w-full" 
                            variant="primary"
                            >
                                Register
                            </Button >
                        </div>
                        <p className="text-center mt-3   text-lg font-bold">If You already have an Account <Link className='text-yellow-400  ml-2' to={'/'}><u>Login</u></Link> </p>

                    </form>
                </div>
            </div>

        </>
    );
}
export default Register