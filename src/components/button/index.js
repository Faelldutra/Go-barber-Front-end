import React from 'react';
import { Container } from './styled';

const Button = ({type ,children, func}) => {
  return (
    <Container>
      <button onClick={func} type={type}>{children}</button>
    </Container>
  );
}

export default Button;