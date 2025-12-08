
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Egg Coffee",
    description: "Bold • Rich • Velvety crema",
    price: "$4",
    image: "/menu/eggcoffee.jpg",
  },
  {
    name: "Signature Saigon Coffee",
    description: "Silky microfoam • Cocoa dusting",
    price: "$5.50",
    image: "/menu/signatureCoffee.jpg",
  },
  {
    name: "Salt Cream Coffee",
    description: "Bright • Citrusy • Refreshing",
    price: "$6",
    image: "/menu/saltCoffee.jpg",
  },
  {
    name: "Pandan Cream Coffee",
    description: "House-made maple • Oat milk • Autumn in a cup",
    price: "$6.50",
    image: "/menu/pandanCoffee.jpg",
  },
];

export default menuItems;