import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { nextFeed } from "../routers/coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            nextFeed(navigate)
        }
    }, [navigate])
}
export default useUnprotectedPage