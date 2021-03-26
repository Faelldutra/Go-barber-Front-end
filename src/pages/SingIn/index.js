import React, { useCallback, useState, useEffect } from 'react';
import { Container, Content, Background } from './styled';
import logo from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';
import Button from '../../components/button';
import Input from '../../components/input';
import { Link } from 'react-router-dom';

const SingIn = () => {

  const [valueEmail, setValueEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [valueSenha, setValueSenha] = useState('');
  const [errorSenha, setErrorSenha] = useState('');

  const IsEmail = useCallback((email) => {
    const emailCheck = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailCheck.test(email);
  }, []);

  const checkEmail = useCallback(() => {
    if (valueEmail === '') {
      setErrorEmail('Campo não pode ser vazio');
      return false;
    }
    if (valueEmail !== '') {
      if (IsEmail(valueEmail) === false) {
        setErrorEmail('E-mail inválido');
        return false;
      }
    }
    return true;
  }, [valueEmail]);

  useEffect(() => {
    if (valueEmail !== '') {
      setErrorEmail(false)
    }
  }, [valueEmail]);

  const checkSenha = useCallback(() => {
    if (valueSenha.length >= 0 && valueSenha.length < 8) {
      setErrorSenha('Senha inválida');
      return false;
    }
    return true;
  }, [valueSenha]);

  useEffect(() => {
    if (valueSenha !== '') {
      setErrorSenha(false)
    }
  }, [valueSenha]);

  const handleSubimit = useCallback(() => {
    checkEmail();
    checkSenha();

  }, [checkEmail, checkSenha]);

  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="GoBarber"></img>
          <form onSubmit={handleSubimit}>
            <h1>Faça seu Logon</h1>
            <Input icon={FiMail} iconError={FiAlertCircle} value={valueEmail} setState={setValueEmail} error={errorEmail} name="email" type="text" placeholder="E-mail" />
            <Input icon={FiLock} iconError={FiAlertCircle} value={valueSenha} setState={setValueSenha} error={errorSenha} name="senha" type="password" placeholder="Senha" />
            <Button type="button" func={handleSubimit}>Entrar</Button>
            <a href="#">Esqueci minha senha</a>
          </form>
          <Link to="/register">
            <a><FiLogIn />Criar conta</a>
          </Link>
        </Content>
        <Background />
      </Container>
    </>
  );
}

export default SingIn;