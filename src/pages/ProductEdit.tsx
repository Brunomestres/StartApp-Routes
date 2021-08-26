import  { useState , useEffect } from 'react';
import { Container, FormControl, FormLabel, Input, Select, Button} from '@chakra-ui/react';
import { Product } from '../data/products';
export function ProductEdit() {
  const [title, setTitle ] = useState("");
  const [price, setPrice ] = useState("");
  const [category, setCategory ] = useState("");
  const [imgUrl, setImgUrl ] = useState("");



  function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    let products = [];

    const product = {
      id: Math.round(Math.random() * 10000),
      title,
      price,
      category,
      imgUrl
    }

    const save =  localStorage.getItem('products');
    if(save){
      const localProduct = JSON.parse(save);
      products.push(...localProduct, product)
      localStorage.setItem('products', JSON.stringify(products))
      return;
    }

    products.push(product);
    localStorage.setItem('products', JSON.stringify(products))
  }


  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mt="15px">
          <FormLabel>Titulo</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} isRequired />
        </FormControl>

        <FormControl id="price" mt="15px">
          <FormLabel>Preço</FormLabel>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} isRequired />
        </FormControl>

        <FormControl id="category" mt="15px">
          <FormLabel>Categoria</FormLabel>
          <Select placeholder="Selecione a categoria" isRequired value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="Lanches">Lanches</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Sobremesas">Sobremesas</option>
          </Select>
        </FormControl>

        <FormControl id="imgUrl" mt="15px">
          <FormLabel>Url da Imagem</FormLabel>
          <Input type="text" value={imgUrl} isRequired onChange={(e) => setImgUrl(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" type="submit" mt="8">Adicionar</Button>
      </form>
    </Container>
  )
}
