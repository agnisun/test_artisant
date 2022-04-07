import {css, Global} from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import styled from "@emotion/styled";
import {TitleProps} from "../types/types";

export const GlobalStyles = () => (
  <Global styles={css`
    ${emotionNormalize}
    html {
      box-sizing: border-box;
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      font-size: 14px;
      font-family: 'Open-sans', sans-serif;
      line-height: 24px;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
  `}
  />
)

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  padding: 15px 0;
  flex-direction: column;

  & > div:first-of-type {
    margin-bottom: 15px;
  }

  @media (min-width: 510px) {
    padding: 30px 0;
    flex-direction: row;
    justify-content: space-between;

    & > div:first-of-type {
      margin-bottom: 0;
    }
  }
`

export const Container = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  padding: 0 10px;

  @media (min-width: 510px) {
    padding: 0 15px;
  }
`

export const Title = styled.h2<TitleProps>`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.xxl};
  margin: ${props => props.margin};
`

export const SubTitle = styled.div`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.lg};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 0 0 30px;
`

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`

export const CheckboxText = styled.span`
  margin-left: 10px;
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.lg};
`