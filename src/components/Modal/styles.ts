import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({theme }) => css`  
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    /* pointer-events: none; */

    display: flex;
    align-items: center;

    > div {
      min-width: ${theme.pxToRem(600)};
      position: relative;
      margin: 0 auto;
      padding: ${theme.pxToRem(15)} ${theme.pxToRem(20)};
      background: ${theme.colors.white};

      > a{
        text-decoration: none;
        position: absolute;
        width: ${theme.pxToRem(30)};
        right: -15px;
        top: -20px;
        text-align: center;
        line-height: ${theme.pxToRem(30)};
        margin-top: ${theme.pxToRem(5)};
        background: ${theme.colors.primaryDark};
        border-radius: 50%;
        font-size: ${theme.pxToRem(16)};
        color: ${theme.colors.white};

        &:hover{
          background-color: ${theme.colors.primaryLight};
        }
      }

      h2{
        color: ${theme.colors.primary};
        margin-bottom: ${theme.pxToRem(18)};
      }
    }
  `}
`;