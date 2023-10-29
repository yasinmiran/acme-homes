import { Disclosure } from '@headlessui/react'
import UserProfile from "./user-profile.tsx";

export default function Navigation() {
    return (
        <Disclosure as="nav" className="bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative flex h-16 justify-between">
                    <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <div className="flex space-x-2 justify-center items-center text-dark-blue">
                                <svg fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1.1em"
                                     width="1.1em" xmlns="http://www.w3.org/2000/svg" className="stroke-dark-blue">
                                    <path className="stroke-dark-blue" strokeWidth="2"
                                          d="M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"></path>
                                </svg>
                                <p className="font-bold">Acme Homes</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <UserProfile/>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}
