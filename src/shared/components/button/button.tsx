import styled from "styled-components";
import {FC} from "react";

interface IButton {
    children: string;
}

export const Button: FC<IButton> = ({children}) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnDark};
    box-shadow: ${({ theme }) => theme.shadows.soft};
    padding: ${({ theme }) => theme.sizes.padding.medium};
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
    
    border: none;
    cursor: pointer;
    position: relative;
    
    transition: 0.3s;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    &::after {
        content: "";
        background: ${({ theme }) => theme.gradients.green};
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 12px;
        top: 0;
        left: 0;
        opacity: 0.1;
        transition: all 0.3s;
    }
`
