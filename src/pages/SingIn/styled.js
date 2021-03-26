import styled from 'styled-components';
import background from '../../assets/background.png'
import {shade} from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
      font-size: 2rem;
    }
    
    a{
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color .2s;
    }
    a:hover{
      color: ${shade(0.2, '#F4EDE8')}
    }
  }

  > a {
      color: #FF9000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      outline: 0;
      transition: color .2s;
      display: flex;
      align-items: center;

      svg{
        margin-right: 16px;
      }
  }
  a:hover{
        color: ${shade(0.2, '#FF9000')}
      }
` 
export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`  