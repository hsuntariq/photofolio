import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import Button from '../../components/button/Button'
import Photos from './photos/Photos'
import { MdOutlineClose } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
const Home = () => {

    const [imageShow, setImageShow] = useState(false)
    const [singleImage, setSingleImage] = useState('')
    const path = useLocation()
    const pathName = path.pathname
    useEffect(() => {
        <Loader />
    }, [pathName])


    return (
        <>
            <div style={{
                transition: 'all 0.4s',
                scale: `${imageShow ? '1' : '0'}`,

            }} className="image-overlay">
                <MdOutlineClose className='cross-overlay' cursor="pointer" size={40} onClick={() => setImageShow(false)} />
                <div style={{
                    transition: 'all 0.4s',
                    scale: `${imageShow ? '1' : '0'}`,
                    height: '100%'
                }} className="w-50 mx-auto d-flex justify-content-center align-items-center">

                    <img height={'100%'} width={'100%'} src={singleImage ? singleImage : 'https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-2.jpg'} alt="" />
                </div>
            </div>
            <div className="container col-lg-4 text-center">
                <h1>I'm <span className='name'>Jenny Wilson</span> a Professional Photographer from New York City</h1>
                <p className='text-secondary'>
                    Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
                </p>
                <Button content="Available for hire" />
            </div>
            <Photos show={setImageShow} singleImage={singleImage} setSingleImage={setSingleImage} />
        </>
    )
}

export default Home