

interface Phone {
    id: number;
    img: string;
    title: string;
    rame: string;
    color: string;
    brand: string;
    price: string;
  }
  

export const phoneServer: Phone[] = [ 
  {
    id: 1,
    img: '/phone1.png',
    title: "Samsung Galaxy A05",
    rame: "4/64 GB",
    color: "Black",
    brand: "Samsung",
    price: "1 700 000",
  },
  {
    id: 2,
    img: '/phone2.png',
    title: "iPhone 12",
    rame: "6/128 GB",
    color: "White",
    brand: "Apple",
    price: "7 000 000",
  },
  {
    id: 3,
    img: '/phone3.png',
    title: "Xiaomi Redmi Note 10",
    rame: "4/64 GB",
    color: "Blue",
    brand: "Xiaomi",
    price: "2 300 000",
  },
  {
    id: 4,
    img: '/phone4.png',
    title: "Huawei P40",
    rame: "8/256 GB",
    color: "Silver",
    brand: "Huawei",
    price: "5 500 000",
  }
];
