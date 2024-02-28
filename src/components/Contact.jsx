import { Navigate, useNavigate } from "react-router-dom"

export const Contact = () => {
    const navigate = useNavigate()

    return (
        <>
            <div> Contact Page</div>
            <button onClick={() => navigate('/')}>Go back to Home page </button>

        </>
    )
}