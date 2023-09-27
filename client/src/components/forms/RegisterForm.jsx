import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import TextField from "../common/form/TextField"
import { useDispatch, useSelector } from "react-redux"
import { getAuthErrors, getIsLoggedIn, singUp } from "../../store/users"
import { Link, useNavigate } from "react-router-dom"
import TextAreaField from "../common/form/TextAreaField"

const RegisterForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginError = useSelector(getAuthErrors())
    const isLoggedIn = useSelector(getIsLoggedIn())

    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        profession: "",
        about: "",
    })
    const [errors, setErrors] = useState({})
    const [tryRegister, setTryRegister] = useState(false)

    const handleChange = (target) => {
        setData((prevState) => ({
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
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: {
                message: "Email введен некорректно",
            },
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения",
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву",
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число",
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8,
            },
        },
        profession: {
            isRequired: {
                message: "Профессия обязательна для заполнения",
            },
        },
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate(-1, { replace: true })
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (tryRegister) {
            validate()
        }
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        setTryRegister(true)
        const isValid = validate()
        if (!isValid) return
        dispatch(singUp(data))
    }

    return (
        <>
            <h2 className="mt-2 mb-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Регистрация
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                    label="Имя"
                    name="name"
                    value={data.name}
                    placeholder="Ваше имя"
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    placeholder="Ваш Email"
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder="8+ Символов, 1 Заглавная буква, 1 Цифра"
                    onChange={handleChange}
                    error={errors.password}
                />
                <TextField
                    label="Профессия"
                    name="profession"
                    value={data.profession}
                    placeholder="Ваше профессия"
                    onChange={handleChange}
                    error={errors.profession}
                />
                <TextAreaField
                    label="О себе"
                    value={data.about || ""}
                    onChange={handleChange}
                    name="about"
                    error={errors.comment}
                />

                {loginError && <p className="text-red-500">{loginError}</p>}

                <button
                    type="submit"
                    disabled={!isValid}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Зарегистрироваться
                </button>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Уже есть аккаунт?{" "}
                    <Link to="/auth/signIn" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Войти
                    </Link>
                </p>
            </form>
        </>
    )
}

export default RegisterForm
