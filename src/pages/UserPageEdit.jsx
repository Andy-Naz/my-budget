import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { getCurrentUserData, updateUser } from "../store/users"
import TextField from "../components/common/form/TextField"
import { Link } from "react-router-dom"

const UserPageEdit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector(getCurrentUserData())
    const [user, setUser] = useState(currentUser)

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser(user))
        navigate(`/user/${currentUser._id}`, { replace: true })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <TextField label="Имя" name="name" value={user.name} onChange={handleChange} required />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/user/${currentUser._id}`}>
                                <button className="btn btn-primary">Назад</button>
                            </Link>
                            <button className="btn btn-primary" type="submit">
                                Применить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UserPageEdit
