import styled, { css } from "styled-components";

type ContainerProps = {
  url: string,
  isMobile: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({theme, url, isMobile}) => css`
    height: 100vh;

    background-image: url(${url});
    background-size: cover;
    background-color: #000;
    opacity: 0.7;

    background-repeat: ${isMobile ? 'no-repeat' : 'repeat'};
  `}
`;

export const Menu = styled.div`
  ${({theme}) => css`
    height: ${theme.pxToRem(80)};
    color: ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${theme.colors.blackOpacity};
  `}
`;

export const MenuButtons = styled.div`
  ${({theme}) => css`
    cursor: pointer;
    padding: ${theme.pxToRem(12)};
    border-radius: ${theme.pxToRem(16)};

    span{
      font-size: ${theme.pxToRem(16)};
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }

    &:hover{
      background-color: ${theme.colors.primaryDark};
    }
  `}
`