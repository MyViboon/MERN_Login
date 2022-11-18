import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingToRedirect = () => {

    const [count, setCount] = useState(3)
    const navigate = useNavigate()

    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        }, 1000);
        //Redirect
        count === 0 && navigate('/login')
        return () => clearInterval(interval)
        // eslint-disable-next-line
    },[count])

  return (
    <div className='container p-5 text-center'>
        <h3>อย่าหาเข้ามาหนีไป {count} วินาที </h3>
    </div>
  )
}

export default LoadingToRedirect