import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`

  button{
      background: #FF9000;
      border-style: none;
      border-radius: 10px;
      height: 56px;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 19px;
      transition: background-color .2s;
    }
    button:hover{
      background: ${shade(0.2, '#FF9000')}
    }
`