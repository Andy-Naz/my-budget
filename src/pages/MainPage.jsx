import React from "react"
import Widget from "../components/widget/Widget"

const MainPage = () => {
    return (
        <>
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
