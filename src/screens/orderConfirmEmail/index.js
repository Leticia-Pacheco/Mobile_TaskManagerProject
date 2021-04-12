import { ButtonConfirm, Container, Header, ImageConfirmEmail, Mensagem } from "./styles";
import GifConfirmEmail from "../../../assets/GifConfirmEmail.gif";

function PedidoConfirmEmail () {
    return(
            <Container>
                <Header>
                    <p>Bem vinda(o) ao TecnoTc!</p>
                </Header>

                <Mensagem>
                    <p>A equipe agradece o seu cadastro!</p>
                    <p>Enviaremos uma confirmação ao email cliente.exemplo@hotmail.com, ok?</p>

                    <ImageConfirmEmail>
                        <img source={GifConfirmEmail} alt="Confirmação de email"/>
                    </ImageConfirmEmail>

                    <ButtonConfirm>
                        <p>OK!</p>
                    </ButtonConfirm>
                </Mensagem>
            </Container>
    );
}

export default PedidoConfirmEmail;