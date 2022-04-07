import {IProduct} from "../../types/types";
import Product from "../Product/Product";
import {Grid} from "../../styles/global";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {setProducts} from "../../store/product/product";

const Products = () => {
  const dispatch = useAppDispatch();
  const {items: products, isFiltered} = useAppSelector(state => state.products)
  const [initialArray, setInitialArray] = useState(products)

  useEffect(() => {
    if (products.length > 0) {
      if (isFiltered) {
        setInitialArray(products)
        dispatch(setProducts(products.filter((product: any) => product.quantity_available > 0)))
      } else {
        dispatch(setProducts(initialArray))
      }
    }
  }, [isFiltered])

  return (
    <Grid>
      {products.map((product: any, i, arr) => {
        const newProduct: IProduct = {
          author: product.created_by.display_name,
          name: product.json_nft_data.name,
          price: product.initial_price,
          index: i + 1,
          total: arr.length
        }

        return <Product product={newProduct} key={product.product_id}/>
      })}
    </Grid>
  );
};

export default Products