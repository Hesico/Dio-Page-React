import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'
import Perfil from "../../assets/perfil.png"
import Capa from "../../assets/capa.png"

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
export default function Card(){
  return (
    <CardContainer>
      <ImageBackground src={Capa}/>
      <Content>
        <UserInfo>
          <UserPicture src={Perfil}/>
         <div>
          <h4>Henrique</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}