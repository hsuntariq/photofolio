import React, { useEffect } from 'react'
import Loader from '../../components/loader/Loader'
import { useLocation } from 'react-router-dom'
import Button from '../../components/button/Button'
import { IoChevronForward } from "react-icons/io5";
import Slider from './Slider';

const About = () => {
    const path = useLocation()
    const pathName = path.pathname
    useEffect(() => {
        <Loader />
    }, [pathName])


    return (
        <>
            <div className="col-lg-5 mx-auto text-center">

                <h1 className="text-center">
                    About
                </h1>
                <p className='fs-5 text-center'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                <Button content='Available for hire' className='d-block mx-auto' />
            </div>
            <div className="container row col-lg-7 mx-auto">
                <div className="col-lg-5">
                    <img width={'100%'} src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/profile-img.jpg" alt="" />
                </div>
                <div className="col-lg-7">
                    <h4 style={{
                        color: '#27A776'
                    }}>Lorem ipsum dolor sit.</h4>
                    <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                    <div className="d-flex gap-5">
                        <ul className='d-flex flex-column gap-4 list-unstyled'>
                            <li>
                                <strong> <IoChevronForward color='#27A776' />Birthday:</strong>1 may 1995
                            </li>
                            <li>
                                <strong> <IoChevronForward color='#27A776' />Birthday:</strong>1 may 1995
                            </li>
                            <li>
                                <strong> <IoChevronForward color='#27A776' />Birthday:</strong>1 may 1995
                            </li>
                            <li>
                                <strong> <IoChevronForward color='#27A776' />Birthday:</strong>1 may 1995
                            </li>

                        </ul>
                        <ul className='d-flex flex-column gap-4 list-unstyled'>
                            <li>
                                <strong> <IoChevronForward color='#27A776' />Birthday:</strong>1 may 1995
                            </li>
                            <li>
                                <strong> <IoChevronForward color='#27A776' />Birthday:</strong>1 may 1995
                            </li>
                            <li>
                                <strong> <IoChevronForward color='#27A776' />Birthday:</strong>1 may 1995
                            </li>
                            <li>
                                <strong> <IoChevronForward color='#27A776' />Birthday:</strong>1 may 1995
                            </li>

                        </ul>
                    </div>
                    <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p><br />
                    <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                </div>
            </div>

            <div className="container my-5">
                <div className="d-flex align-items-center gap-3 ">
                    <h5 className="text-secondary text-uppercase">
                        testimonials
                    </h5>
                    <hr className='border-0' style={{
                        height: '2px',
                        width: '10%',
                        background: '#27A776'
                    }} />
                </div>
                <h1>What they are saying</h1>
                <Slider />
            </div>
        </>
    )
}

export default About