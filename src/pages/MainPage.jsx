import React, { useEffect } from "react"
import Widget from "../components/Widget"
import API from "../api"
import useMockData from "../utils/mockData"

const MainPage = () => {
    useEffect(() => {
        API.accounts.fetchAll().then((data) => console.log(data))
    }, [])
    const { error, initialize } = useMockData()
    const handleClick = () => {
        initialize()
    }
    return (
        <>
            <button className="btn btn-primary" onClick={handleClick}>
                Инициализировать
            </button>
            <div className="container mt-3">
                <div className="row align-items-start">
                    <div className="col mb-3">
                        <Widget type="card" />
                    </div>
                    <div className="col mb-3">
                        <Widget type="card" />
                    </div>
                    <div className="col mb-3">
                        <Widget type="card" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Widget type="analytics" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
