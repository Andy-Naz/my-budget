import React from "react"
import { useSelector } from "react-redux"
import { getCurrentUserData } from "../store/users"
import { Link } from "react-router-dom"

const UserPage = () => {
    const currentUser = useSelector(getCurrentUserData())

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <img src={currentUser.image} alt="" height="100" className="img-responsive rounded-circle" />
                        <div>{currentUser.name}</div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <Link to={`/user/${currentUser._id}/edit`}>
                            <button className="btn btn-primary">Редактировать</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage
