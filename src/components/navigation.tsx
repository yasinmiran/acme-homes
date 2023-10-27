import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { fetchAirBnBListings } from "../api/listings.ts";
import { GrHomeRounded } from "react-icons/gr";

export default function Navigation() {

    useEffect(() => {
        fetchAirBnBListings({}).then((results) => {
            console.log(results)
        })
        //smart_location, host_location, bedrooms, bathrooms
    })

    return (
        <Disclosure as="nav" className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative flex h-16 justify-between">
                    <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <div className="flex space-x-2 justify-center items-center">
                                <GrHomeRounded/>
                                <p>ACME Homes</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="absolute -inset-1.5"/>
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button
                                    className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span className="absolute -inset-1.5"/>
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={ Fragment }
                                enter="transition ease-out duration-200"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="absolute right-0 z-[50] mt-2 w-60 origin-top-right rounded-md bg-green-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-y-4">
                                    <Menu.Item>
                                        <div>
                                            <div>Jane Smith</div>
                                            <div>jane.smith@me.com</div>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <div>
                                            <a href="#">View Profile</a>
                                            <button>Sign out</button>
                                        </div>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}
