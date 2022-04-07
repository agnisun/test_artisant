import {CheckboxContainer, CheckboxText, Title} from "../../styles/global";
import React, {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {setIsFiltered} from "../../store/product/product";

const Filter = () => {
  const dispatch = useAppDispatch()
  const {isFiltered} = useAppSelector(state => state.products)

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsFiltered(e.target.checked))
  }

  return (
    <div>
      <Title margin={'0 0 25px'}>Filter</Title>
      <CheckboxContainer>
        <input type={'checkbox'} checked={isFiltered} onChange={handleCheckbox}/>
        <CheckboxText>Available</CheckboxText>
      </CheckboxContainer>
    </div>
  );
};

export default Filter