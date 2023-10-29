import { Disclosure } from '@headlessui/react'
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
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <UserProfile/>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}
