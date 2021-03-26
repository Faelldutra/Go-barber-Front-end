import styled from 'styled-components';
import { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #232129;
  border-radius: 10px;
  border: solid 2px #232129;
  padding: 16px 0;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  
    input{
      background: transparent;
      color: #F4EDE8;
      flex: 1;
      border-style: none;
    }
    input::placeholder{
      color: #666360;
    }
    svg{
      padding: 0 15px;
    }

    ${props => props.error && css `
      border-color: #c53030;
    `}
  
    ${props => props.focus && css `
      color: #FF9000;
      border-color: #FF9000;
    `}

    ${props => props.filled && css `
      color: #FF9000;
    `}
`
export const Error = styled.div`
  position: relative;

span{
  background: #c53030;
  width: 160px;
  padding: 8px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.4s;
  color: #FFF;
  position: absolute;
  bottom: 30px;
  left: 10px;
  visibility: hidden;

  @media(max-width: 500px){
    left: -100px;
  }
}
span::before{
  content: '';
  border-style: solid;
  border-color: #c53030 transparent;
  border-width: 6px 6px 0 6px;
  top: 100%;
  position: absolute;
  left: 5%;

  @media(max-width: 500px){
    left: 68%;
  }
}
&:hover span{
  opacity: 1;
  visibility: visible;
}

`