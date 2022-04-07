import React from "react";
import { useState } from "react";
import * as L  from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/users";
import { CircularProgress } from "@material-ui/core";

const LoginForm = ({setRightButtonText}) => {
  const [form, onChange, clear] = useForm({email:'', password:''})
  
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState("")

  const onSubmitForm = (event) => {
    //console.log(form)
    event.preventDefault()
    login(form, clear, navigate, setRightButtonText, setIsLoading)
  }  

  return (               
        <L.InputsContainer>
          <form onSubmit={onSubmitForm}>
            <TextField
                name={'email'}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={'normal'}
                required
                type={'email'}
            />
            <TextField
                name={'password'}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                variant={"outlined"}
                fullWidth
                margin={'normal'}
                required
                type={"password"}
                />
            <Button
              type={'submit'}
              fullWidth
              variant={"contained"}
              color="primary"                          
            >
             {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <> Fazer Login!</>}
            </Button>
          </form>
        </L.InputsContainer>            
  );
};
export default LoginForm;