import styled from "styled-components";
import {FC} from "react";

interface IMainTitle {
    children: string;
}

export const MainTitle: FC<IMainTitle> = ({children}) => {
    return (
        <Title>
            {children}
        </Title>
    );
};

const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
`