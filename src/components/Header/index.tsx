import React from 'react';
import logo from '../../assets/logo-dio.png';
import { useNavigate } from 'react-router-dom';
import {IHeader} from "./types"
import Button from '../Button';

import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
} from './styles';

export default function Header({ autenticado } : IHeader) {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate('/register');
  };

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='Logo da dio' />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/45184516?v=4' />
          ) : (
            <>
              <MenuRight href='/'>Home</MenuRight>
              <Button title='Entrar' onClick={handleClickLogin} variant="primary"/>
              <Button title='Cadastrar' onClick={handleClickRegister} variant="primary"/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};