import React, { useEffect } from 'react'
import Loader from '../../components/loader/Loader'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const path = useLocation()
    const pathName = path.pathname
    useEffect(() => {
        <Loader />
    }, [pathName])
    return (
        <div>Contact</div>
    )
}

export default Contact