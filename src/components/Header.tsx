import { Link } from 'react-router-dom';
import { HStack, Heading, Button } from '@chakra-ui/react';
import { useHistory } from "react-router-dom";
import { store } from '../data/products';
export default function Header() {
  const router = useHistory();
  return (
      <>
      <HStack p={4} borderBottom="1px solid" borderColor="gray.300">
        <Heading size="lg" fontWeight="bold" >
          <Link to="/" style={ { textDecoration:'none', fontFamily: 'Brush Script MT' }}>
            {store.title}
          </Link>
        </Heading>
        <Heading size="md" ml="150">
          <Button ml="40px" backgroundColor="blue.300"
            onClick={() => router.push(`/create`)}
          >
            Cadastrar
          </Button>
        </Heading>
      </HStack>
      </>
  )
}
