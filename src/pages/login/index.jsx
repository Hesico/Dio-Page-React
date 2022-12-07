import { MdEmail, MdLock } from 'react-icons/md';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api"

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper
} from './styles';

const schema = yup.object({
  email: yup.string().email("email não válido!").required(),
  password: yup.string().min(3, "Minimo 3 caracteres").required(),
}).required();

export default function Login() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  const onSubmit = async formData => {
    try {
      const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
        navigate("/feed");
      } else {
        alert("Email ou Senha inválidos!");
      }
    } catch (e) {
      alert("Houve um erro!");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu login</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                placeholder='E-mail'
                leftIcon={<MdEmail />}
                name='email'
                errorMessage={errors?.email}
              />
              <Input
                control={control}
                type='password'
                placeholder='Senha'
                leftIcon={<MdLock />}
                name='password'
                errorMessage={errors?.password}
              />
              <Button title='Entrar' variant='secondary' type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>
                {' '}
                <a href='/register'>Criar Conta</a>{' '}
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};