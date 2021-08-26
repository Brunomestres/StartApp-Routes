import  { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, FormControl, FormLabel, Input, Select, Button} from '@chakra-ui/react';
import { Product } from '../data/products';
export function ProductEdit() {
  const [products, setProducts] = useState<Product[]>(() => getStorage())
  const [title, setTitle ] = useState("");
  const [price, setPrice ] = useState("");
  const [category, setCategory ] = useState("");
  const [imgUrl, setImgUrl ] = useState("");
  const { id } = useParams<{ id: string }>();

  useEffect(() =>{
      const ProductFind = getProduct();
      if(ProductFind){
        setTitle(ProductFind.title);
        setPrice(ProductFind.price);
        setCategory(ProductFind.category);
        setImgUrl(ProductFind.imgUrl);
      }
      console.log(products);
  } ,[])


  function getProduct()
  {
    const save =  getStorage();
    if(save)
    {
      let selectedProduct:Product;
      selectedProduct = save.find((p:Product) => p.id === parseInt(id))
      return selectedProduct;
    }
    return false;
  }

  function getStorage()
  {
    const localProduct = localStorage.getItem('products');
    if(localProduct)
    {
      const productJson = JSON.parse(localProduct);
      return productJson;
    }
    return {};
  }



  function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    const product = {
      id,
      title,
      price,
      category,
      imgUrl
    }

    const storage = getStorage();

    const updatedListProduct = storage.map((p:Product) => {
      if(p.id === parseInt(id)){
        p.title = title;
        p.category = category;
        p.price = price;
        p.imgUrl = imgUrl
      }
      return p;
    })

    localStorage.setItem('products', JSON.stringify(updatedListProduct));

    // setProducts((oldValue) =>  {
    //   return {
    //     ...oldValue,
    //     product
    //   }
    // });

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
        <Button colorScheme="blue" type="submit" mt="8">Salvar</Button>
      </form>
    </Container>
  )
}
