import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isFiltered: false
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setIsFiltered: (state, action: PayloadAction<boolean>) => {
      state.isFiltered = action.payload
    },
    filterProducts: (state) => {
      state.items.filter((product: any) => product.quantity_available > 0)
    }
  }
})

export const {setProducts, setIsFiltered} = productSlice.actions;
export default productSlice.reducer;