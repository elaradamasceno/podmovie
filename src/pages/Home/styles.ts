import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
`

export const Content = styled.div`
  ${({theme}) => css`
    padding-bottom: ${theme.pxToRem(40)};
    background-color: ${theme.colors.black};
  `}
`