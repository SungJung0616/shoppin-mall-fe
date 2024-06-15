import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductSlider from '../common/productSlider/productSlider';
import { productActions } from '../action/productAction';

const SaleProduct = () => {
  const dispatch = useDispatch();
  const { saleProducts,loading, error} = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(productActions.getSaleProducts());
  }, [dispatch]);

  return (
    <ProductSlider title="세일상품" products={saleProducts} loading={loading} error={error} />
  );
}

export default SaleProduct
