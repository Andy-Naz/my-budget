import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import TextField from "../common/form/TextField"
import { useDispatch } from "react-redux"
import { singUp } from "../../store/users"
import { Link, useNavigate } from "react-router-dom"

const RegisterForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
    })
    const [errors, setErrors] = useState({})

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: {
                message: "Email введен некорректно",
            },
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения",
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3,
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
    }

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
        dispatch(singUp(data))
        navigate("/", { replace: true })
    }

    return (
        <>
            <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Регистрация
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <TextField label="Имя" name="name" value={data.name} onChange={handleChange} error={errors.name} />
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

                {/* <div>
                        Уже зарегистрированы?
                        <Link to="/auth/signIn">Войти</Link>
                    </div>

                    <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>
                        Submit
                    </button> */}
            </form>
        </>
    )
}

export default RegisterForm
