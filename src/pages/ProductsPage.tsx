import { useEffect, useState } from 'react';
import { Container, Heading, HStack } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { Product } from "../data/products";

export function ProductsPage() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const localProduct = localStorage.getItem('products');
    if(localProduct)
    {
      const productJson = JSON.parse(localProduct);
      setProducts(productJson);
    }

  },[])

  return (
    <>
      <Container>
        {products.map((p) => (
          <ProductCard
            id={p.id}
            key={p.title}
            imgUrl={p.imgUrl}
            title={p.title}
            price={p.price}
            category={p.category}
          />
        ))}
      </Container>
    </>
  );
}
