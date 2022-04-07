import styled from "styled-components"

export const ConteinerCard = styled.div`
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
  padding:10px ;
  color: white;
  :hover{
      cursor: pointer;
      //opacity: ;
  }     
`
