import styled, { css } from "styled-components";

type HeaderCardProps = {
  url: string
}

export const Container = styled.div`
  ${({theme}) => css`
    width: ${theme.pxToRem(255)};
    height: ${theme.pxToRem(300)};

    display: flex;

    border-radius: ${theme.pxToRem(16)};
    cursor: pointer;

    &:hover{
      box-shadow: 0 2px 8px ${theme.colors.white};
    }
  `}
`;

export const HeaderCard = styled.div<HeaderCardProps>`
  ${({theme, url}) => css`
    background-image: url(${url});
    background-size: cover;

    background-color: #000;
    opacity: 0.8;

    border-radius: ${theme.pxToRem(16)};

    height: ${theme.pxToRem(300)};
    width: 100%;
  `}
`