import React from "react";
import useProductsFetch from "../prduct-card/useProductsFetch";
import { ProductCard } from "../prduct-card/product-card";

export const ProductList = () => {
  const data = useProductsFetch(
    "https://flag-2023.proxy.beeceptor.com/products"
  );

  return (
    <>
      {data[0] && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data[0].map((product) => (
            <ProductCard {...product} key={product.title} />
          ))}
        </div>
      )}
    </>
  );
};
