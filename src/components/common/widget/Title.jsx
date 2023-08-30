import React from "react"
import { Link } from "react-router-dom"

const Title = ({ title }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">{title}</h5>
                <Link to="/transaction">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-success px-3">
                            <p className="d-inline me-2">Создать</p>
                            <i className="bi bi-plus-circle d-inline"></i>
                        </button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Title
