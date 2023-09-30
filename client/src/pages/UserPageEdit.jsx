import React, { useEffect, useState } from "react"
import { validator } from "../utils/validator"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { getCurrentUserData, updateUser } from "../store/users"
import TextField from "../components/common/form/TextField"
import { Link } from "react-router-dom"
import TextAreaField from "../components/common/form/TextAreaField"

const UserPageEdit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector(getCurrentUserData())
    const [user, setUser] = useState(currentUser)
    const [errors, setErrors] = useState({})

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения",
            },
        },
        profession: {
            isRequired: {
                message: "Профессия обязательна для заполнения",
            },
        },
    }

    useEffect(() => {
        validate()
    }, [user])

    const validate = () => {
        const errors = validator(user, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        dispatch(updateUser(user))
        navigate(`/user/${currentUser._id}`, { replace: true })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full lg:w-4/12 px-4 mx-auto pt-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className="relative">
                                    <img
                                        alt="Аватар"
                                        src={currentUser.image}
                                        className="shadow-xl rounded-full border-none -mt-12 w-24"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                <TextField
                                    label="Имя"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                />
                            </h3>
                            <div className="mb-2 text-blueGray-600 mt-2">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <TextField
                                    label="Профессия"
                                    name="profession"
                                    value={user.profession}
                                    onChange={handleChange}
                                    error={errors.profession}
                                />
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        <TextAreaField
                                            label="О себе"
                                            value={user.about || ""}
                                            onChange={handleChange}
                                            name="about"
                                        />
                                    </p>
                                    <div className="flex justify-around">
                                        <Link to={`/user/${currentUser._id}`} className="font-normal text-slate-500">
                                            Назад
                                        </Link>
                                        <button type="submit" className="font-normal text-pink-500">
                                            Применить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UserPageEdit
