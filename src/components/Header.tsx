import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Heading } from '@chakra-ui/react';
import { store } from '../data/products';
export default function Header() {
    return (
        <>
        <HStack p={4} borderBottom="1px solid" borderColor="gray.300">
          <Heading size="lg" fontWeight="bold">
            <Link to="/">
              {store.title}
            </Link>
          </Heading>
          <Heading size="md" ml="150">
            <Link to="/product/create">
              Cadastrar
            </Link>
          </Heading>
        </HStack>
        </>
    )
}
