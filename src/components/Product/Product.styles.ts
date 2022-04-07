import styled from "@emotion/styled";
import {CardColorProps, CardProps} from "../../types/types";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  overflow: hidden;
`

export const CardContent = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  flex-basis: 380px;
  justify-content: space-between;
  padding: 15px;
  color: ${props => props.theme.colors.white};
  background: url(${props => props.background}) center / cover no-repeat;
`

export const CardSupTitle = styled.div<CardColorProps>`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.color ? props.color : '#F3F3F3'};
`

export const CardInfo = styled.div<CardColorProps>`
  font-weight: 600;
  font-size: 16px;
  color: ${props => props.color ? props.color : props.theme.colors.black};
`

export const CardName = styled.div`
  font-weight: 700;
`

export const CardType = styled.div`
  max-width: 160px;
  font-size: ${props => props.theme.fontSizes.xl};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 15px;
`