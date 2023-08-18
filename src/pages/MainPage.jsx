import React from "react"
import WidgetCard from "../components/widget/Card"

const MainPage = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row align-items-start">
                    <div className="col mb-3">
                        <WidgetCard />
                    </div>
                    <div className="col mb-3">
                        <WidgetCard />
                    </div>
                    <div className="col mb-3">
                        <WidgetCard />
                    </div>
                </div>
            </div>
            <div className="container"></div>
        </>
    )
}

export default MainPage
