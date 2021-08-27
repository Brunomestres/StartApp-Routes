import {
  Text,
  Heading,
  VStack,
  HStack,
  Badge,
  Image,
  Box,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  category: string;
  price: string;
  imgUrl: string;
};

export function ProductCard(props: Props) {
  const router = useHistory();
  return (
    <HStack
      mt={4}
      align="flex-start"
      onClick={() => router.push(`/product/${props.id}`)}
      backgroundColor="#FAEEAD"
    >
      <Box borderRadius="md" width="100px" overflow="hidden" height="100px" >
        <Image
          width="100%"
          backgroundPosition="center center"
          src={props.imgUrl}
          minH="100%"
        />
      </Box>
      <VStack align="flex-start">
        <Heading color="gray.700" size="md">
          {props.title}
        </Heading>
        <HStack>
          <Badge colorScheme="blue">{props.category}</Badge>
          <Text fontWeight="semibold">R$ {props.price}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
