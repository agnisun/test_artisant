export type TitleProps = {
  margin?: string;
}

export type CardProps = {
  background: string | null;
}

export type CardColorProps = {
  color?: string;
}

export interface IProduct {
  index: number;
  author: string;
  name: string;
  price: number;
  total: number;
}