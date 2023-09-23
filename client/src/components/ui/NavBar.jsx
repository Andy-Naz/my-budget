import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getIsLoggedIn, getUsersLoadingStatus } from "../../store/users"
import NavProfile from "./NavProfile"

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn())


    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item d-flex align-items-center">
                            <NavLink to="/" className="nav-link" aria-current="page">
                                Главная
                            </NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <NavLink to="history" className="nav-link" aria-current="page">
                                История
                            </NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <NavLink to="test" className="nav-link" aria-current="page">
                                Тест
                            </NavLink>
                        </li>
                        {isLoggedIn  ? (
                            <NavProfile />
                        ) : (
                            <NavLink to="auth/signIn" className="nav-link" aria-current="page">
                                Войти
                            </NavLink>
                        )}
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar
