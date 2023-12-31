import React, { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import { getIsLoggedIn } from "../../store/users"
import NavProfile from "./NavProfile"
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "../../assets/images/logo.png"
import TransactionAddButton from "./transaction/TransactionAddButton"

const navigationList = [
    { name: "Дашборд", to: "/" },
    { name: "Транзакции", to: "history" },
]

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    const [navigation, setNavigation] = useState(navigationList)

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img className="h-6 w-auto hover:drop-shadow-lg" src={Logo} alt="Your Company" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {isLoggedIn ? (
                                    <>
                                        <TransactionAddButton />
                                        <NavProfile />
                                    </>
                                ) : (
                                    <Link to="auth/signIn" className="nav-link" aria-current="page">
                                        <div className="relative ml-3">
                                            <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                Войти
                                            </button>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <NavLink key={item.name} to={item.to}>
                                    <Disclosure.Button
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                        }
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar
