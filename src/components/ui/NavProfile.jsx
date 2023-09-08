import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCurrentUserData } from "../../store/users"

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData())
    if (!currentUser) return "Loading..."

    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img src={currentUser.image} alt="" height="40" className="img-responsive rounded-circle" />
                {currentUser.name}
            </a>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="#">
                        Профиль
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <Link to="/logout">Выйти</Link>
                    </a>
                </li>
            </ul>
        </li>
    )
}

export default NavProfile
