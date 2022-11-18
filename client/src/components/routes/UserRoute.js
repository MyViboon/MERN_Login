import React from 'react'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

const UserRoute = ({children}) => {

    const { userAuth } = useSelector((state) => ({...state}))
    console.log('กันเข้ายูส', userAuth.user)

    return userAuth.user && userAuth.user.token ? children : <LoadingToRedirect/>
}

export default UserRoute