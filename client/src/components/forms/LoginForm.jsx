import React, { useState, useEffect } from "react"
import { validator } from "../../utils/validator"
import TextField from "../common/form/TextField"
import { useDispatch, useSelector } from "react-redux"
import { getAuthErrors, getIsLoggedIn, logIn } from "../../store/users"
import { Link, useNavigate } from "react-router-dom"

const LoginForm = () => {
    const navigate = useNavigate()

    const loginError = useSelector(getAuthErrors())
    const isLoggedIn = useSelector(getIsLoggedIn())

    const [data, setData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    const validatorConfig = {
        email: {
            isRequired: { message: "Электронная почта обязательна для заполнения" },
            isEmail: { message: "Email введен некорректно" },
        },
        password: {
            isRequired: { message: "Пароль обязателен для заполнения" },
            isCapitalSymbol: { message: "Пароль должен содержать хотя бы одну заглавную букву" },
            isContainDigit: { message: "Пароль должен содержать хотя бы одну цифру" },
            min: { message: "Пароль должен содержать не менее 8 символов", value: 8 },
        },
    }

    useEffect(() => {
        if (isLoggedIn) {
            // dispatch(loadUsersList)
            navigate("/", { replace: true })
        }
    }, [isLoggedIn])

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        dispatch(logIn({ payload: data }))
        // navigate("/", { replace: true })
    }

    return (
        <>
            <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Вход в аккаунт
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />

                {loginError && <p className="text-danger">{loginError}</p>}

                {/* <div>
                    Нет учётной записи?
                    <Link to="/auth/signUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Зарегистрироваться</Link>
                </div> */}

                <button
                    type="submit"
                    disabled={!isValid}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Войти
                </button>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Нет учётной записи?{" "}
                    <Link to="/auth/signUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Зарегистрироваться
                    </Link>
                </p>
                {/* <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
                    Отправить
                </button> */}
            </form>
        </>
    )
}

export default LoginForm
