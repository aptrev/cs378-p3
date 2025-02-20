import './App.css';
import React, { useState } from 'react';
import MenuItem from './components/MenuItem';
import MenuHeader from "./components/MenuHeader";
import MenuFooter from "./components/MenuFooter";

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

// Menu List component that renders each MenuItem
const MenuList = ({ updateCart, handleItemChange, resetItems }) => (
  <div className="container mt-4">
      <div className="temp">
      {menuItems.map((item) => (
        // Renders individual MenuItem for each item in menuItems
        <MenuItem 
          key={item.id}
          {...item}
          updateCart={updateCart}
          handleItemChange={handleItemChange}
          resetItems={resetItems}
        />
      ))}
    </div>
  </div>
);

function App() {
  const [cost, setCost] = useState(0); // Tracks total cost of the cart
  const [cart, setCart] = useState({}); // Tracks items in the cart
  const [resetItems, setResetItems] = useState(false); // Flag to reset items in the cart

  // Updates the cart and recalculate the total cost
  const updateCart = (title, itemCount, price) => {
    setCart((prevCart) => {
      const newCart = {
        ...prevCart,
        [title]: itemCount, // Update or add the item count for the item
      };
  
      // Recalculate total cost from cart contents
      const newCost = Object.entries(newCart).reduce((total, [key, count]) => {
        const item = menuItems.find((item) => item.title === key); // Find item details by title
        return total + (item ? item.price * count : 0); // Update total cost
      }, 0);
  
      setCost(newCost); // Set the updated cost in state
      return newCart;
    });
  };

  // Handles item count changes
  const handleItemChange = (title, itemCount, price) => {
    updateCart(title, itemCount, price);
  };

  // Handles placing an order
  const handleOrder = () => {
    if (cost === 0) {
      alert("No items in cart"); // Alert if no items are in the cart
      return;
    }
    // Prepare a message with the cart items and quantities
    const cartMsg = Object.entries(cart)
      .map(([title, count]) => `${count} × ${title}`)
      .join("\n");

    alert(`Order Placed!\n${cartMsg}`); // Show an order confirmation message
  };

  // Clears all items from the cart and reset state
  const handleClearAll = () => {
    setCost(0); 
    setCart({}); 
    setResetItems(true); 
    setTimeout(() => setResetItems(false), 0); 
  };

  return (
    <div className="body">
      {/* Renders the header of the menu, menu list, and the footer */}
      <MenuHeader /> 
      <MenuList updateCart={updateCart} handleItemChange={handleItemChange} resetItems={resetItems} /> 
      <MenuFooter cost={cost} handleOrder={handleOrder} handleClearAll={handleClearAll} /> 
    </div>
  );
}

export default App;