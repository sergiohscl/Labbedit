import styled from "styled-components"

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    width: 100vw;
    margin-top: 5vh;
`

export const Nome = styled.p`
  //border-bottom: 1px solid white;
  text-align: center;
  font-size: 40px;
`
export const Texto = styled.p`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  text-align: center;
  font-size: 20px;
`
export const Numero = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  //border-top: 1px solid white;
  margin: 5px;  
`
export const TextoN = styled.p`
  font-size: 20px;
  margin: 5px;
`
export const BotaoContainer = styled.div`
  display: flex;
  width: 80px;
  margin-bottom: 40px;
  margin-top: 40px;
`