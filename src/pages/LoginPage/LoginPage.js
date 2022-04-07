import React from "react";
import * as L  from "./styled";
import img_eddit from "../../assets/img_eddit.jpg";
import useForm from "../../hooks/useForm";
import Button from "@mui/material/Button";
import { nextCadastro } from "../../routers/coordinator";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = ({setRightButtonText}) => {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({email:'', password:''})
  
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    //console.log(form)
    event.preventDefault()    
  }
  return (    
      <L.ScreenContainer>
        <L.LogoImage src={img_eddit} />        
        <LoginForm setRightButtonText={setRightButtonText}/> 
        <L.SignUpButtonContainer>
            <Button
              onClick={()=>nextCadastro(navigate)}
              type={'submit'}
              fullWidth 
              variant={"text"}             
              color={"primary"}                           
            >
              Não possui conta? Cadastra-se!
            </Button>
        </L.SignUpButtonContainer>

      </L.ScreenContainer>   
  );
};

export default LoginPage;