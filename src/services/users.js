import axios from "axios"
import { BASE_URL } from "../constant/urls"
import { nextFeed } from "../routers/coordinator"

export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
       setIsLoading(false)
        nextFeed(navigate)
        setRightButtonText("Logout")
        
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    })
  }  

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        nextFeed(navigate)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    })
  }
   