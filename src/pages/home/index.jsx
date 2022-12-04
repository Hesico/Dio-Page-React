import {Link} from "react-router-dom";
import Button from "../../components/Button"
import Header from "../../components/Header"
import banner from "../../assets/Banner.png"


import { Container, TextContent, Title, TitleHighlight } from "./styles";

export default function Home() {
    return (<>
        <Header></Header>
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
                <Button title="Começar agora" variant="secondary" />
            </div>
            <div>
                <img src={banner} alt="Imagem Home" />
            </div>
        </Container>
    </>)
}
