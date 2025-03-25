import {Logo} from "@shared/components/logo";
import {Link} from "react-router";
import {ROUTES} from "@/app/constants";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <StyledNav>
                <StyledUl>
                    <li>
                        <StyledLink to={ROUTES.HOME}>Главная</StyledLink>
                    </li>
                    <li>
                        <StyledLink to={ROUTES.BOOKING}>Аренда</StyledLink>
                    </li>
                    <li>
                        <StyledLink to={ROUTES.ABOUT}>О нас</StyledLink>
                    </li>
                </StyledUl>
            </StyledNav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.sizes.padding.medium};
    position: relative;
    
    background: ${({ theme }) => theme.colors.primary};
    
    border: ${({ theme }) => theme.colors.widgetBorder};
`

const StyledNav = styled.nav`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
`

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.textOnDark};
    text-decoration: none;
`