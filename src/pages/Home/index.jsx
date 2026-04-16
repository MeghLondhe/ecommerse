import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/producstSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  console.log(items);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        <p>Home</p>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {items.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </>
  );
};

export default Home;
