import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { nextLogin } from "../routers/coordinator"

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token){
            nextLogin(navigate)
        }
    }, [navigate])
}
export default useProtectedPage