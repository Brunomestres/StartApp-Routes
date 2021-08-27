import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Center } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { Product } from "../data/products";
import { PaginationCustom } from '../components/PaginationCustom';
export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [ productsPerPage ] = useState(20);
  const [ currentPage, setCurrentPage ] = useState(1);
  const { page } = useParams<{ page: string }>();

  useEffect(() => {
    const localProduct = localStorage.getItem('products');
    if(localProduct)
    {
      const productJson = JSON.parse(localProduct);
      setProducts(productJson);
    }
    if(page){
      setCurrentPage(parseInt(page));
    }
  },[])

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);



  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);


  return (
    <>
      <Container>
        {
          products.length <= 0 ?
          <Center mt="12px" bg="blue.300" h="100px" color="black" borderRadius="4px">
            Sem Registro de Produtos
          </Center>
          :
          currentProducts.map((p) => (
            <ProductCard
              id={p.id}
              key={p.id}
              imgUrl={p.imgUrl}
              title={p.title}
              price={p.price}
              category={p.category}
            />
          ))
        }
        <br/>
        <PaginationCustom
          totalProducts={products.length}
          productsPerPage={productsPerPage}
          paginate={paginate}
        />
      </Container>
    </>
  );
}
