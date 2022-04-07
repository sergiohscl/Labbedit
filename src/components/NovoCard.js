import styled from "styled-components"

export const ConteinerNovoCard = styled.div`
  border: 1px solid #aaa1c8;
  width: 400px; 
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
  align-items:left;
  margin: 10px;
  //box-shadow: 1px 1px  4px black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #F27649;
  padding: 10px ;
  color: white;       
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