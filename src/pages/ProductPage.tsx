import { Container, Box, Image, Badge, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import { Product} from "../data/products";

export function ProductPage() {
  const router = useHistory();
  const localProduct = localStorage.getItem('products');
  const { id } = useParams<{ id: string }>();
  let selectedProduct:any;
    if(localProduct)
    {
      const productJson = JSON.parse(localProduct);

      selectedProduct = productJson.find(
        (product: Product) => product.id === parseInt(id)
      );
    }



  function removeStorage(id:number)
  {
    if(localProduct)
    {
      const productJson = JSON.parse(localProduct);
      const filterProducts = productJson.filter((p:Product) => p.id !== id);
      localStorage.setItem('products',JSON.stringify(filterProducts));
    }
  }

  return (
    <Container>
      <Link to="/"><b>Voltar</b></Link>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={selectedProduct?.imgUrl} alt="Imagem do Produto" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {selectedProduct?.category}
          </Badge>

        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {selectedProduct?.title}
        </Box>

        <Box>
          R$ {selectedProduct?.price}
        </Box>
      </Box>
      <Button colorScheme="blue"  onClick={() => router.push(`/${selectedProduct?.id}/edit`)}>Editar</Button>
      <Button colorScheme="red" onClick={() => removeStorage(selectedProduct?.id)} >Excluir</Button>
    </Box>
    </Container>
  );
}
