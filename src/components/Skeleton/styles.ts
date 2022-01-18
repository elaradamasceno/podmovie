import styled, { css } from "styled-components";

type ContentProps = {
  width: string;
  height: string
}

export const Content = styled.div<ContentProps>`
  ${({theme, height, width}) => css`  
    box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
    border-radius: ${theme.pxToRem(4)};
    height: ${height};
    position: relative;
    overflow: hidden;

    background-color: ${theme.colors.gray};

    &::after{
      content: '';
      display: block;
      position: absolute;
      left: -150px;
      top: 0;
      height: 100%;
      width: ${theme.pxToRem(150)};
      background: linear-gradient(to right, transparent 0%, ${theme.colors.grayLight} 50%, transparent 100%);
      animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }

    @keyframes load {
      from {
        left: -150px;
      }
      to {
        left: 100%;
      }
    }
  `}
`