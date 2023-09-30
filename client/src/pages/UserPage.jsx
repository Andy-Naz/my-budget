import React from "react"
import { useSelector } from "react-redux"
import { getCurrentUserData } from "../store/users"
import { Link } from "react-router-dom"

const UserPage = () => {
    const currentUser = useSelector(getCurrentUserData())

    return (
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
                            {currentUser.name}
                        </h3>
                        <div className="mb-2 text-blueGray-600 mt-2">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            {currentUser.profession}
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">{currentUser.about}</p>
                                <Link to={`/user/${currentUser._id}/edit`} className="font-normal text-pink-500">
                                    Редактировать профиль
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage
