import React from "react"
import diagram from "../../assets/images/diagram.jpg"

const Diagram = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row align-items-start">
                    <div className="col mb-3">
                        <img src={diagram} className="rounded img-fluid" alt="..." />
                    </div>
                    <div className="col mb-3">
                        <img src={diagram} className="rounded img-fluid" alt="..." />
                    </div>
                    <div className="col mb-3">
                        <img src={diagram} className="rounded img-fluid" alt="..." />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Diagram
