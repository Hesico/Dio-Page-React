import {useNavigate} from "react-router-dom";
import Button from "../../components/Button"
import Header from "../../components/Header"
import banner from "../../assets/Banner.png"


import { Container, TextContent, Title, TitleHighlight } from "./styles";

export default function Home() {

    const navigate = useNavigate();

    const onClickSignIn = () =>{
        navigate("/login");
    }

    return (<>
        <Header autenticado={false}></Header>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                    Implemente
                    <br/>
                    </TitleHighlight>
                    O seu futuro global agora!
                </Title>
                <br/>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais 
                    inovadoras do mundo e encare seu novo desafio profissional, 
                    evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={onClickSignIn}/>
            </div>
            <div>
                <img src={banner} alt="Imagem Home" />
            </div>
        </Container>
    </>)
}
