import { Navigate, useNavigate } from 'react-router-dom'

export const Home = () => {
   const navigate =  useNavigate()
    return (
        <>
         <div> Home Page </div>
         <button onClick = {() => navigate('blog')} > Go to Blog Page </button>
        </>

    )
}