import React from "react"
import { useSelector } from "react-redux"
import { getCurrentUserData } from "../store/users"
import { Link } from "react-router-dom"
import Avatar from "../assets/images/avatar.png"

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
                                    src={Avatar}
                                    className="shadow-xl rounded-full border-none -mt-12 w-24"
                                />
                            </div>
                        </div>
                        {/* <div className="w-full px-12 text-center mt-10">
                            <div className="flex justify-center pt-4">
                                <div className="mx-2 p-3 text-center w-3/12">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-indigo-600">
                                        22
                                    </span>
                                    <span className="text-sm text-indigo-400">Friends</span>
                                </div>
                                <div className="mx-2 p-3 text-center w-3/12">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-indigo-600">
                                        10
                                    </span>
                                    <span className="text-sm text-indigo-400">Photos</span>
                                </div>
                                <div className="mx-2 p-3 text-center w-3/12">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-indigo-600">
                                        89
                                    </span>
                                    <span className="text-sm text-indigo-400">Comments</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="text-center mt-6">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                            {currentUser.name}
                        </h3>
                        <div className="mb-2 text-blueGray-600 mt-2">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            Solution Manager - Creative Tim Officer
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                    An artist of considerable range
                                </p>
                                <Link to={`/user/${currentUser._id}/edit`} className="font-normal text-pink-500">
                                    Редактировать профиль
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div classNameName="container mt-5">
        //     <div classNameName="row">
        //         <div classNameName="col-md-6 offset-md-3 shadow p-4">
        //             <div classNameName="d-flex justify-content-center align-items-center mb-2">
        //                 <img src={currentUser.image} alt="" height="100" classNameName="img-responsive rounded-circle" />
        //                 <div>{currentUser.name}</div>
        //             </div>

        //             <div classNameName="d-flex justify-content-center align-items-center">
        //                 <Link to={`/user/${currentUser._id}/edit`}>
        //                     <button classNameName="btn btn-primary">Редактировать</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default UserPage
