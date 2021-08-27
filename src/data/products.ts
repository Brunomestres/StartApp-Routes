export enum ProductCategory {
  Snacks = "Lanches",
  Drinks = "Bebidas",
  Desserts = "Sobremesas",
}

export type Product = {
  id: number;
  title: string;
  price: string;
  category: ProductCategory ;
  imgUrl: string;
};


type Store = {
  title: string;
  address: string;
  email: string;
  phone: string;
  products: Product[];
};

export const store: Store = {
  title: "Lanches e Cia",
  address: "91 Wiseman Street",
  phone: "865-475-9193",
  email: "lanchesecia@mail.com",
  products: [
    {
      id: 1,
      title: "Hamburger Master",
      price: "15,90",
      category: ProductCategory.Snacks,
      imgUrl:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=600&w=600",
    },
    {
      id: 2,
      title: "Panqueca Insana",
      imgUrl:
        "https://images.pexels.com/photos/4046471/pexels-photo-4046471.jpeg?cs=srgb&dl=pexels-nikola-%C4%8Ded%C3%ADkov%C3%A1-4046471.jpg&fm=jpg",
      price: "20,90",
      category: ProductCategory.Snacks,
    },
    {
      id: 3,
      title: "Super Laranja Juice",
      imgUrl:
        "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?cs=srgb&dl=pexels-bruno-scramgnon-1337824.jpg&fm=jpg",
      price: "17,10",
      category: ProductCategory.Drinks,
    },
  ],
};
