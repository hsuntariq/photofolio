import React, { useState } from 'react'
import { GrExpand } from "react-icons/gr";
import { IoIosLink } from "react-icons/io";
import { Link } from 'react-router-dom';

const SinglePhoto = ({ id, image, show, setSingleImage }) => {

    return (
        <>

            <div className="col-lg-3 rounded-3">
                <div className="card my-1 card-img border-0 position-relative rounded-3">
                    <div className="overlay">
                        <div className="icons" style={{
                            height: '100%'
                        }}>
                            <div style={{
                                height: '100%',
                                color: "white"
                            }} className="d-flex gap-3 justify-content-center align-items-center">
                                <GrExpand onClick={() => {
                                    show(true);
                                    setSingleImage(image)
                                }} size={30} cursor='pointer' />
                                <Link to={`/details/${id}`}>
                                    <IoIosLink size={30} cursor='pointer' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img className='rounded-3' width={'100%'} style={{ objectFit: 'cover' }} src={image} alt="" />
                </div>
            </div>
        </>
    )
}

export default SinglePhoto