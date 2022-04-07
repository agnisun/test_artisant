import {Card, CardContent, CardFooter, CardInfo, CardName, CardSupTitle, CardType} from "./Product.styles";
import {useTheme} from "@emotion/react";
import {FC} from "react";
import defaultImage from '../../img/default-image.jpg';
import {IProduct} from "../../types/types";

const Product: FC<{ product: IProduct }> = ({product: {author, name, price, index, total}}) => {
  const theme = useTheme();

  return (
    <Card>
      <CardContent background={defaultImage}>
        <div>
          <CardSupTitle>created by</CardSupTitle>
          <CardName>{author}</CardName>
        </div>
        <div>
          <CardType>{name}</CardType>
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <CardSupTitle color={theme.colors.gray}>available</CardSupTitle>
          <CardInfo>{index} of {total}</CardInfo>
        </div>
        <div>
          <CardSupTitle color={theme.colors.gray}>price</CardSupTitle>
          <CardInfo color={theme.colors.blue}>{price} ETH</CardInfo>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Product