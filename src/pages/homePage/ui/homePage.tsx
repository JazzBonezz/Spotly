import {Button} from "@shared/components/button";
import styled from "styled-components";
import {MainTitle} from "@shared/components/mainTitle";

export const HomePage = () => {
    return (
        <Container>
            <MainTitle>Аренда парковочных мест</MainTitle>
            <p>Наш сервис <strong>Spotly</strong> предназначен для удобного бронирования парковочных мест.</p>
            <Button>Перейти к выбору</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    max-width: 1000px;
    width: fit-content;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
    background-color: ${({ theme }) => theme.colors.widgetBackground};
    box-shadow: ${({ theme }) => theme.shadows.soft};
    margin: 40px auto;
    padding: ${({ theme }) => theme.sizes.padding.large};
    
`