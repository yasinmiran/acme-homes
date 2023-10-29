import { Disclosure } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import { GrHomeRounded } from "react-icons/gr";
import UserProfile from "./user-profile.tsx";

export default function Navigation() {
    return (
        <Disclosure as="nav" className="bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative flex h-16 justify-between">
                    <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <div className="flex space-x-2 justify-center items-center text-dark-blue">
                                <GrHomeRounded className="text-dark-blue"/>
                                <p className="font-bold">Acme Homes</p>
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
                        <UserProfile/>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}
