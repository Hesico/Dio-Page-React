import Header from "../../components/Header";
import Input from "../../components/Input";
import {Container, Column, TitleText, Row, Text, FormContainer, VariantText} from "./styles";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api"
import { IFormData } from './types';
import Button from "../../components/Button";

const schema = yup.object({
    email: yup.string().email("email não válido!").required(),
    password: yup.string().min(3, "Minimo 3 caracteres").required(),
    name: yup.string().required(),
  }).required();


export default function Register() {

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onSubmit"
      });
      const onSubmit = async (formData : IFormData) => {
        try {
          const {data} = await api.get(`users?email=${formData.email}`)
          if(data.length === 1){
            alert("Email já cadastrado!");
          } else {
            navigate("/feed");
          }
        } catch (e) {
          alert("Houve um erro!");
        }
      };
    
    const navigate = useNavigate();

  return (
    <>
        <Header autenticado={false}/>
        <Container>
            <Row>
                <TitleText>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </TitleText>
            </Row>
            <Row>
                <Column>
                    <TitleText>
                        Comece agora grátis
                    </TitleText>
                    <Text>
                        Crie sua conta e make the change._
                    </Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormContainer>
                        <Input
                            control={control}
                            placeholder='Nome Completo'
                            leftIcon={<MdPerson color="purple"/>}
                            name='name'
                            errorMessage={errors?.name?.message}
                        />
                        <Input
                            control={control}
                            placeholder='E-mail'
                            leftIcon={<MdEmail color="purple"/>}
                            name='email'
                            errorMessage={errors?.email?.message}
                        />
                        <Input
                            control={control}
                            type='password'
                            placeholder='Senha'
                            leftIcon={<MdLock color="purple"/>}
                            name='password'
                            errorMessage={errors?.password?.message}
                        />
                        </FormContainer>
                        <FormContainer>
                        <Button title='Criar minha conta' variant='secondary' type="submit" />
                        </FormContainer>
                    </form>
                    <Text>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </Text>
                    <VariantText>
                        Já tenho conta. <a href='/login'>Fazer login</a>
                    </VariantText>
                </Column>
            </Row>
        </Container>
    </>
  )
}
