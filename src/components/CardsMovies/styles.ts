import styled, { css } from "styled-components";

type HeaderCardProps = {
  url: string
}

export const Container = styled.div`
  ${({theme}) => css`
    position: relative;
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
`;

export const TitleCard = styled.div`
  ${({theme}) => css`
    position: absolute;
    bottom: 0px;

    width: 100%;
    height: ${theme.pxToRem(40)};

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.primaryDark};
    opacity: 0.6;
    border-radius: 0 0 ${theme.pxToRem(16)} ${theme.pxToRem(16)};

    span {
      font-size: ${theme.pxToRem(18)};
      color: ${theme.colors.grayLight};
    }
    
  `}
`