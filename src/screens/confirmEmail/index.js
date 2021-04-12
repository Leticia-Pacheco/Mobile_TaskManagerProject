import { ButtonConfirm, Container, Header, ImageConfirmEmail, Mensagem } from "./styles";
import GifConfirmEmail from "../../../assets/ImageconfirmEmail.png";

function PedidoConfirmEmail () {
    return(
            <Container>
                <Header>
                    <ImageConfirmEmail>
                        <img source={GifConfirmEmail} alt="Confirmação de email"/>
                    </ImageConfirmEmail>
                    <p>Prontinho!</p>
                </Header>

                <Mensagem>
                    <p>O seu email foi confirmado!</p>
                    <p>Aproveite as ferramentas feitas especialmente para você!</p>

                    <ButtonConfirm>
                        <p>Ir para a página principal!</p>
                    </ButtonConfirm>
                </Mensagem>
            </Container>
    );
}

export default PedidoConfirmEmail;
