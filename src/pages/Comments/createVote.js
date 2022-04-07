import React from "react"
import { BASE_URL } from "../../constant/urls";
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as C from "./styledCreate"
import { useParams } from "react-router-dom";
import axios from "axios";

const CreateVote = () =>{
    
     const [form, onChange, clear] = useForm({direction:''})
      
        const navigate = useNavigate()
              
        const params = useParams()  
      
        const onSubmitForm = (event) => {
         // console.log(form)
           event.preventDefault()
          axios.post(`${BASE_URL}/posts/${params.id}/votes`, form,{
              headers: {
                  Authorization: localStorage.getItem('token')
              }
          })
          .then((res) => {        
              clear()
              alert(res.data)
          })
          .catch((err) => {
              alert(err.response.data.message)
          })    
        }      
           //console.log(params.id)    
        return(
          <C.InputsContainer>
               <form onSubmit={onSubmitForm}>            
                  <TextField
                      name={'direction'}
                      value={form.direction}
                      onChange={onChange}
                      label={"Vote aqui"}
                      variant={"outlined"}
                      fullWidth
                      margin={'normal'}
                      required 
                        title={"number"}             
                  />
                 <Button
                    type={'submit'}
                    fullWidth
                    variant={"contained"}
                    color="primary"
                    onClick={onSubmitForm}                          
                  >
                    Criar Voto!
                  </Button>
                </form>          
          </C.InputsContainer>
        )

}

export default CreateVote;