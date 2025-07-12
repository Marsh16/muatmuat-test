export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

// dummy data 

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Vacuum Cleaner",
    price: 300000,
    stock: 30,
    image: "https://t4.ftcdn.net/jpg/01/94/70/55/360_F_194705549_4AJtJpQnsN294aTXY4kzCWJiyAIxTLsN.jpg"
  },
  {
    id: 2,
    name: "Vacuum Cleaner 2",
    price: 360000,
    stock: 36,
    image: "https://www.electrolux.com.my/globalassets/appliances/vacuum-clearner/z931-fr-1500x1500.png"
  },
  {
    id: 3,
    name: "Vacuum Cleaner 3",
    price: 390000,
    stock: 40,
    image: "https://s1.kaercher-media.com/mam/14285080/mainproduct/212162/d0.jpg"
  },
  {
    id: 4,
    name: "Vacuum Cleaner 4",
    price: 600000,
    stock: 50,
    image: "https://diyhardware.ph/cdn/shop/products/KYI0003.jpg?v=1595339788"
  }
];