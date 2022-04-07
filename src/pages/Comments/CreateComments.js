import React from "react";
import { BASE_URL } from "../../constant/urls";
import { useState } from "react";
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as C from "./styledCreate"
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";


const CreateComments = () => {
  const [form, onChange, clear] = useForm({body:''})

  const [isLoading, setIsLoading] = useState("")

  const navigate = useNavigate()
        
  const params = useParams()  


  const onSubmitForm = (event) => {
    //console.log(form)
     event.preventDefault()
     setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${params.id}/comments`, form,{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {        
        clear()        
        alert(res.data)
        setIsLoading(false)
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    })    
  }

  
  
  return(
    <C.InputsContainer>
         <form onSubmit={onSubmitForm}>            
            <TextField
                name={'body'}
                value={form.body}
                onChange={onChange}
                label={"Comentário"}
                variant={"outlined"}
                fullWidth
                margin={'normal'}
                required                
            />
           <Button
              type={'submit'}
              fullWidth
              variant={"contained"}
              color="primary"
              onClick={onSubmitForm}                          
            >
              
             {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <> Criar comentário!</>}

            </Button>
          </form>          
    </C.InputsContainer>
  )
}
export default CreateComments;