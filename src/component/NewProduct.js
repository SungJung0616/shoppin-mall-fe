import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductSlider from '../common/productSlider/productSlider';
import { productActions } from '../action/productAction';

const NewProduct = () => {
  const dispatch = useDispatch();
  const { newProducts,loading, error} = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(productActions.getNewProducts());
  }, [dispatch]);

  return (
    <ProductSlider title="신상품" products={newProducts} loading={loading} error={error} />
  );
};

export default NewProduct;
