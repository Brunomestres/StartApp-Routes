import { useEffect, useState } from 'react';
import { Container, Box, Image, Badge, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Product} from "../data/products";

export function ProductPage() {
  const [ pruduct, setProduct ] = useState<Product>()
  const router = useHistory();
  const localProduct = localStorage.getItem('products');
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    let selectedProduct:any;
    if(localProduct)
    {
      const productJson = JSON.parse(localProduct);

      selectedProduct = productJson.find(
        (product: Product) => product.id === parseInt(id)
      );
      setProduct(selectedProduct);
      if(!selectedProduct){
        router.push('/error')
      }
    }
  } ,[])


  function removeStorage(id:number)
  {
    if(localProduct)
    {
      const productJson = JSON.parse(localProduct);
      const filterProducts = productJson.filter((p:Product) => p.id !== id);
      localStorage.setItem('products',JSON.stringify(filterProducts));
      return router.push('/')
    }
  }

  return (
    <Container>
      <Button colorScheme="teal"
        variant="ghost"
        onClick={() => router.push(`/`)}
        mt="15px"
        mb="15px"
      >
        Voltar
      </Button>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" backgroundColor="#FAEEAD">
      <Image src={pruduct?.imgUrl} alt="Imagem do Produto" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {pruduct?.category}
          </Badge>

        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {pruduct?.title}
        </Box>

        <Box>
          R$ {pruduct?.price}
        </Box>
      </Box>
      <Button colorScheme="yellow"
        onClick={() => router.push(`/product/${pruduct?.id}/edit`)}
        variant="ghost"
      >
          Editar
      </Button>
      <Button colorScheme="red"
        onClick={() => removeStorage(pruduct?.id!)}
        variant="ghost"
      >
        Excluir
      </Button>
    </Box>
    </Container>
  );
}
