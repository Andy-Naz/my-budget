import React from "react"

const HistoryFilter = () => {
    return (
        <div className="d-flex justify-content-end dropdown">
            <button
                className="btn btn-outline-primary px-4 dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <p className="d-inline me-2">Фильтры</p>
                <i className="bi bi-filter d-inline"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <div class="btn-group dropend w-100">
                        <button
                            type="button"
                            className="btn dropdown-item dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Счет
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="btn-group dropend w-100">
                        <button
                            type="button"
                            className="btn dropdown-item dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Категория
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="btn-group dropend w-100">
                        <button
                            type="button"
                            className="btn dropdown-item dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Сумма
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Menu item
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HistoryFilter