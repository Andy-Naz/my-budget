import React from "react"

const NavProfile = () => {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Мой аккаунт
            </a>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="#">
                        Профиль
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        Выйти
                    </a>
                </li>
            </ul>
        </li>
    )
}

export default NavProfile
