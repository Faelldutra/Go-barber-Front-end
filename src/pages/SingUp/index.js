import React, { useCallback, useEffect, useState } from 'react';
import { Container, Content, Background } from './styled';
import logo from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiAlertCircle } from 'react-icons/fi';
import Button from '../../components/button';
import Input from '../../components/input';
import { Link } from 'react-router-dom';

const SingIn = () => {

  const [data, setData] = useState({});
  const [valueNome, setValueNome] = useState('');
  const [errorNome, setErrorNome] = useState(false);
  const [valueEmail, setValueEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [valueSenha, setValueSenha] = useState('');
  const [errorSenha, setErrorSenha] = useState(false);

  const IsEmail = useCallback((email) => {
    const emailCheck = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailCheck.test(email);
  }, []);

  const checkNome = useCallback(() => {
    if (valueNome === '' || valueNome.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorNome('Campo não pode ser vazio');
      return false;
    }
    if (valueNome !== '') {
      if (valueNome.length !== valueNome.replace(/[^a-zà-úA-ZÀ-Ú ]/g, '').length) {
        setErrorNome('Apenas letras são aceitas');
        return false;
      }
    }
    return true;
  }, [valueNome]);

  useEffect(() => {
    if (valueNome !== '') {
      setErrorNome(false)
    }
  }, [valueNome]);

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
    if (valueSenha === '') {
      setErrorSenha('Campo não pode ser vazio');
      return false;
    }
    if (valueSenha.length > 0 && valueSenha.length < 8) {
      setErrorSenha('Mínimo 8 caracteres');
      return false;
    }
    return true;
  }, [valueSenha]);

  useEffect(() => {
    if (valueSenha !== '') {
      setErrorSenha(false)
    }
  }, [valueSenha]);

  useEffect(() => {
    setData({ nome: valueNome, email: valueEmail, senha: valueSenha });
  }, [valueNome, valueEmail, valueSenha]);

  const handleSubimit = useCallback(() => {
    checkNome();
    checkEmail();
    checkSenha();

  }, [checkNome, checkEmail, checkSenha]);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logo} alt="GoBarber"></img>
          <form onSubmit={handleSubimit}>
            <h1>Faça seu cadastro</h1>
            <Input iconError={FiAlertCircle} icon={FiUser} value={valueNome} name="nome" type="text" placeholder="Nome" setState={setValueNome} error={errorNome} />
            <Input iconError={FiAlertCircle} icon={FiMail} value={valueEmail} name="email" type="text" placeholder="E-mail" setState={setValueEmail} error={errorEmail} />
            <Input iconError={FiAlertCircle} icon={FiLock} value={valueSenha} name="senha" type="password" placeholder="Senha" setState={setValueSenha} error={errorSenha} />
            <Button type="button" func={handleSubimit}>Cadastrar</Button>
          </form>
          <Link to="/">
            <a><FiArrowLeft />Voltar para logon</a>
          </Link>
        </Content>
      </Container>
    </>
  );
}

export default SingIn;