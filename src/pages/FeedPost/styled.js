import styled from "styled-components"

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    width: 100vw;
    margin-top: 5vh;
`
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    align-items: center;
    margin-bottom: 20px;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100vw;
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
  position: relative;
  bottom: 70px;
`
export const Numero = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;  
  margin: 5px;
  
`
export const TextoN = styled.p`
  font-size: 20px;
  margin: 5px;
`
export const ContainerSetas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
export const SetaIcone = styled.div`
    border: 1px solid transparent;
    background-color: transparent;
    color: white;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    position: relative;
    bottom: 70px;
    margin-left: 0.2em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: transparent;
        //color:transparent;
        transform: scale(1.5);
      }
      :active{
        background-color: transparent;
      
      }
`
export const Voto = styled.div`
  position: relative;
  bottom: 70px;
  color: white;`

