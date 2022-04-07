import axios from 'axios';
import React, {useEffect} from 'react';
import {Container, Header, SubTitle, Title} from "./styles/global";
import {useAppDispatch} from "./store";
import {setProducts} from "./store/product/product";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const {data: {data}} = await axios.get('https://artisant.io/api/products')
      dispatch(setProducts(data.products))
    })()
  })

  return (
    <Container>
      <Header>
        <div>
          <Title margin={'0 0 25px'}>Explore</Title>
          <SubTitle>Buy and sell digital fashion NFT art</SubTitle>
        </div>
        <Filter/>
      </Header>
      <main>
        <Products/>
      </main>
    </Container>
  );
}

export default App;
