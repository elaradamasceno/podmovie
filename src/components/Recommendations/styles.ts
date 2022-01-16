import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.paddingPage};
  `}
`;

export const Info = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding-top: ${theme.pxToRem(32)};

    h2{ 
      font-size: ${theme.typograph.title};
    }

    span{
      font-size: ${theme.pxToRem(14)};
    }

    h2, span {
      color: ${theme.colors.gray};
      font-family: 'Poppins', sans-serif;
    }
  `}
`;

export const ContentInfo = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    max-width: 50%;
    margin: 0 auto;
  }
`;

export const SelectPeriod = styled.div`
  ${({theme}) => css`  
    display: flex;
    justify-content: flex-start;
    width: 100%;

    margin-top: ${theme.pxToRem(32)};

    button{
      cursor: pointer;
      background-color: transparent;
      border: none;

      color: ${theme.colors.primaryDark};
      font-size: ${theme.pxToRem(16)} ;
    }
  `}
`

export const Cards = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.pxToRem(32)};

    margin-top: ${theme.pxToRem(32)};
  `}
`;

export const MoreMovies = styled.div`
  ${({theme}) => css`
    margin-top: ${theme.pxToRem(18)};
    cursor: pointer;

    display: flex;
    justify-content: end;

    > div {
      font-size: ${theme.pxToRem(14)};
      color: ${theme.colors.grayLight};
      display: flex;
      align-items: center;
      gap: ${theme.pxToRem(12)};
    }
  `}
`