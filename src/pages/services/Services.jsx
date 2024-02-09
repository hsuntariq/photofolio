import React, { useEffect } from 'react'
import Button from '../../components/button/Button'
import { TbActivityHeartbeat } from "react-icons/tb";
import './services.css'
import Slider from '../about/Slider'
import { useLocation } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
const Services = () => {
    const path = useLocation()
    const pathName = path.pathname
    useEffect(() => {
        <Loader />
    }, [pathName])
    return (
        <>
            <div className="col-lg-5 mx-auto text-center">

                <h1 className="text-center">
                    Services
                </h1>
                <p className='fs-5 text-center'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                <Button content='Available for hire' className='d-block mx-auto' />
            </div>
            <div className="col-lg-7 mx-auto">
                <div className="d-flex gap-3 my-4">
                    {Array.from({ length: 4 }).map((_, index) => {
                        return (
                            <>
                                <div key={index} className="card text-white position-relative p-5" style={{
                                    background: '#161718'
                                }}>
                                    <div style={{
                                        width: '100%',
                                        height: '0',
                                        top: '0',
                                        left: '0',
                                        background: '#27A776',
                                        zIndex: '22',
                                        position: 'absolute'
                                    }} className="over "></div>
                                    <div className="flex flex-column gap-3" style={{
                                        zIndex: '33333'
                                    }}>
                                        <div className="icons beat align-self-start p-2 rounded-circle" style={{
                                            background: '#27A776',
                                            width: 'max-content'
                                        }}>

                                            <TbActivityHeartbeat className='' size={50} />
                                        </div>
                                        <h3>Lorem</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, expedita!</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="container">
                <Slider />
            </div>
        </>
    )
}

export default Services