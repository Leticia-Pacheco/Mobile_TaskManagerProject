import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.div`
    width: 380px;
    max-width: 887vw;
    height: 565px;
    max-height: 100vh;

    display: flex;

    flex-direction: column;

    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;

    border-radius: 25px 25px 25px 25px;
    border: solid 1px ${colors.darkPurple};

    box-shadow: 2px 2px 35px var(--grey);
`;

export const Header = styled.div`
    width: 100%;
    height: 200px;

    display: flex;

    flex-direction: column;
    align-items: center;

    background-color: ${colors.darkPurple};
    border-radius: 25px 25px 0px 0px;

    padding-top: 10px;

    > p {
        font-size: 25px;

        color: white;
        font-weight: bold;

        margin-top: -15px;
    }
`;

export const ImageConfirmEmail = styled.div`
    width: 130px;
    height: 130px;

    padding-bottom: 15px;

    > img {
        width: 130px;
        height: 130px;
    }
`;

export const Mensagem = styled.div`
    width: 100%;
    min-height: 40px;

    padding-top: 55px;
    padding-left: 12px;
    padding-right: 12px;

    flex-direction: column;
    align-items: center;
    display: flex;

    text-align: center;

    > p {
        font-size: 17px;
        font-weight: bold;

        word-spacing: 5px;

        color: ${colors.darkGray};
    }
`;

export const ButtonConfirm = styled.button`
    width: 100%;
    height: 35px;

    border-radius: 10px 10px 10px 10px;
    border: solid 2px ${colors.darkPurple};

    background-color: ${colors.darkPurple};

    color: white;
    font-weight: bold;

    font-size: 15px;

    margin-top: 180px;
`;
