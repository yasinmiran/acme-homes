import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function UserProfile() {
    return (
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
                    className="absolute right-0 z-[50] mt-2 w-80 origin-top-right rounded-xl bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-y-4">
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
    );

}