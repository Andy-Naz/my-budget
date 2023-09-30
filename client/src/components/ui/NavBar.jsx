import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getIsLoggedIn } from "../../store/users"
import NavProfile from "./NavProfile"
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "../../assets/images/logo.png"
import TransactionAddButton from "./transaction/TransactionAddButton"

const navigationList = [
    { name: "Дашборд", to: "/", current: true },
    { name: "Транзакции", to: "history", current: false },
]

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    const [navigation, setNavigation] = useState(navigationList)

    const setMarkNavigation = (name) => {
        const newNavigation = navigation.map((nav) => {
            if (nav.name === name) {
                return { ...nav, current: true }
            }
            return { ...nav, current: false }
        })
        setNavigation(newNavigation)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ")
    }

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
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                                onClick={() => setMarkNavigation(item.name)}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </Link>
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
                                <Link key={item.name} to={item.to}>
                                    <Disclosure.Button
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                            "block rounded-md px-3 py-2 text-base font-medium"
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar
