import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCurrentUserData } from "../../store/users"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData())

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ")
    }

    if (currentUser) {
        return (
            <>
                <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm outline-none ring-2 ring-white ring-offset-2 ring-offset-gray-800 hover:opacity-80">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={currentUser.image} alt="" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to={`/user/${currentUser._id}`}
                                        className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                    >
                                        Ваш профиль
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="/logout"
                                        className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                    >
                                        Выйти
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </>
        )
    }

    return "Loading..."
}

export default NavProfile
