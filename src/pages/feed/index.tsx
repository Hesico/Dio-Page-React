import React from 'react'
import Card  from '../../components/Card';
import UserInfo from '../../components/UserInfo';
import Perfil from "../../assets/perfil.png"

import  Header  from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

export default function Feed(){
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={2}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Henrique" image={Perfil} percentual={25}/>
                <UserInfo nome="Henrique" image={Perfil}  percentual={65}/>
                <UserInfo nome="Henrique" image={Perfil}  percentual={45}/>
                <UserInfo nome="Henrique" image={Perfil}  percentual={72}/>
                <UserInfo nome="Henrique" image={Perfil}  percentual={100}/>
            </Column>
        </Container>
    </>
  )
}