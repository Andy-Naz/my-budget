import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCurrentUserData } from "../../store/users"

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData())
    // console.log(currentUser)
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
                <div className="d-flex justify-content-center align-items-center">
                    <img src={currentUser.image} alt="" height="40" className="img-responsive rounded-circle" />
                    <div>{currentUser.name}</div>
                </div>
            </a>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="#">
                        Профиль
                    </a>
                </li>
                <li>
                    <Link to="/logout" className="dropdown-item">
                        Выйти
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default NavProfile
