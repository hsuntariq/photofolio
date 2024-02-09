import React from 'react'
import { useParams } from 'react-router-dom'
import { photos } from './data'

const Details = () => {
    const { id } = useParams()
    const foundItem = photos.find((photo) => {
        return photo.id == id
    })



    return (
        <>
            <div className="container">
                <h1 className="display-1 text-center">
                    {foundItem.name}
                </h1>
                <img width={'100%'} src={foundItem.image} alt="" />
            </div>
        </>
    )
}

export default Details