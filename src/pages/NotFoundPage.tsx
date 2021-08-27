import { Link } from 'react-router-dom';
import { Container, Alert, AlertIcon, AlertTitle, AlertDescription} from '@chakra-ui/react';
export function NotFoundPage() {
  return (
    <Container mt='2%'>
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Erro na Requisição
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Clique <Link to="/" style={{color:'blue'}}>aqui</Link>  para voltar a página inicial.
        </AlertDescription>
      </Alert>
    </Container>
  )
}
