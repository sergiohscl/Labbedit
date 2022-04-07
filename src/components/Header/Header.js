import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledToolbar } from "./styled";
import { nextLogin } from '../../routers/coordinator'
import { useNavigate } from "react-router-dom";

const Header = ({rightButtonText, setRightButtonText}) => {    
  const token = localStorage.getItem('token')
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token){
      logout()
      setRightButtonText("Login")
      nextLogin(navigate)      
    }else{
      nextLogin(navigate)
    }
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
          LabEddit
        </Typography>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
export default Header;
