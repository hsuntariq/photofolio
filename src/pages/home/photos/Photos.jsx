import React, { useState } from 'react'
import { photos } from './data'
import SinglePhoto from './SinglePhoto'

const Photos = ({ show, setSingleImage }) => {
    return (
        <>
            <div className="container-fluid my-4">
                <div className="row">
                    {photos.map((photo) => {

                        return <SinglePhoto setSingleImage={setSingleImage} show={show} key={photo.id} {...photo} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Photos