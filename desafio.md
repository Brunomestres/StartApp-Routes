## Melhorias

1. Estilizar melhor a página de produto / colocar um layout semelhante ao ifood ou goomer.
2. Botão de "Retornar" ná página do Produto.

## Armazenamento em LocalStorage

> (ver https://www.youtube.com/watch?v=hNTozXl-qJA)

1. Criar página de criação de produto
   1. Inputs para cada uma das propriedades do produto, exceto id.
   2. Armazenar produto criado em localStorage.
2. Na página de produtos, devemos mostrar os produtos contidos no LocalStorage. (não deveremos continuar importar os produtos do arquivo)
3. Botão de Apagar produto, na página do produto, que apaga o produto do localStorage.
4. Página do produto busca o produto por id no localStorage, caso o produto não seja encontrado, Mostrar uma página de erro.
5. Criar página de edição do produto.
   1. mesmos inputs da página de criação
   2. Ao entrar na página, is inputs já estarão preenchidos.

### Extra

6. Limitar o número de items que aparecem na página de produtos em 20, e utilizar a paginação para buscar aos poucos (de 20 em 20) os items do localStorage.
   1. passar o parametro do número da página na url
