import { useNavigate  } from "react-router-dom"

export const Blog = () => {
    const navigate = useNavigate()
    return (
        <>
         <div> Welcome to my blog page!</div>
         <button onClick={() => navigate('/')}>Go back to Home page </button>
        
        </>
    )
}