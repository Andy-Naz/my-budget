import React from "react"

const Test = () => {
    return (
        <>
            <h1>Все загрузилось</h1>
            <button
                type="button"
                className="btn btn-outline-success ms-1"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Редактировать"
            >
                Текст
            </button>
        </>
    )
}

export default Test
