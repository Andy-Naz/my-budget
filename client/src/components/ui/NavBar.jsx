import React, { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getIsLoggedIn } from "../../store/users"
import NavProfile from "./NavProfile"
import { Disclosure, Menu } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "../../assets/images/logo.png"
import TransactionAddButton from "./transaction/TransactionAddButton"

const navigationList = [
    { name: "Дашборд", to: "/", current: true },
    { name: "Транзакции", to: "history", current: false },
    { name: "Тест", to: "test", current: false },
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
                                {/* Mobile menu button*/}
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
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                {/* Profile dropdown */}

                                {isLoggedIn ? (
                                    <>
                                        <TransactionAddButton />
                                        <NavProfile />
                                    </>
                                ) : (
                                    <NavLink to="auth/signIn" className="nav-link" aria-current="page">
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-white">
                                                    Войти
                                                </Menu.Button>
                                            </div>
                                        </Menu>
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <NavLink key={item.name} to={item.to}>
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
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )

    //     return (
    //         <nav className="navbar navbar-expand-sm bg-body-tertiary">
    //             <div className="container-fluid">
    //                 <a className="navbar-brand" href="#">
    //                     Navbar
    //                 </a>
    //                 <button
    //                     className="navbar-toggler"
    //                     type="button"
    //                     data-bs-toggle="collapse"
    //                     data-bs-target="#navbarSupportedContent"
    //                     aria-controls="navbarSupportedContent"
    //                     aria-expanded="false"
    //                     aria-label="Toggle navigation"
    //                 >
    //                     <span className="navbar-toggler-icon"></span>
    //                 </button>
    //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                     <ul className="navbar-nav me-auto mb-lg-0">
    //                         <li className="nav-item d-flex align-items-center">
    //                             <NavLink to="/" className="nav-link" aria-current="page">
    //                                 Главная
    //                             </NavLink>
    //                         </li>
    //                         <li className="nav-item d-flex align-items-center">
    //                             <NavLink to="history" className="nav-link" aria-current="page">
    //                                 История
    //                             </NavLink>
    //                         </li>
    //                         <li className="nav-item d-flex align-items-center">
    //                             <NavLink to="test" className="nav-link" aria-current="page">
    //                                 Тест
    //                             </NavLink>
    //                         </li>
    //                         {isLoggedIn  ? (
    //                             <NavProfile />
    //                         ) : (
    //                             <NavLink to="auth/signIn" className="nav-link" aria-current="page">
    //                                 Войти
    //                             </NavLink>
    //                         )}
    //                     </ul>

    //                 </div>
    //             </div>
    //         </nav>
    //     )
}

export default NavBar
