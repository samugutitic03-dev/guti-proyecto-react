import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const INITIAL_CART = [
  {
    id: 'camisaprueba1',
    name: 'Camiseta Turtle INC',
    description: 'Camiseta negra',
    price: 199000,
    priceFormatted: '$199.000',
    quantity: 1,
    size: 'M',
    image: '/camisa h (2).png'
  },
  {
    id: 'topmujerprueba',
    name: 'Top mujer Turtle INC',
    description: 'Top mujer',
    price: 69000,
    priceFormatted: '$69.000',
    quantity: 1,
    size: 'S',
    image: '/topmujer.png'
  }
];

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('carritoTurtle');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.items) && parsed.items.length > 0) {
          return parsed.items;
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_CART;
  });

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    try {
      const resumenCarrito = {
        total,
        cantidades: cartItems.map((item) => item.quantity),
        items: cartItems
      };
      localStorage.setItem('carritoTurtle', JSON.stringify(resumenCarrito));
    } catch {
      // ignore
    }
  }, [cartItems, total]);

  const addToCart = (product, selectedSize = 'M') => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name || product.detailTitle,
          description: product.description ? product.description.slice(0, 35) + '...' : '',
          price: product.price,
          priceFormatted: product.priceFormatted,
          quantity: 1,
          size: selectedSize,
          image: product.mainImage || product.gallery?.[0] || '/camisa h (2).png'
        }
      ];
    });
  };

  const changeQuantity = (index, delta) => {
    setCartItems((prevItems) => {
      const updated = [...prevItems];
      const newQty = updated[index].quantity + delta;
      if (newQty < 1) {
        updated[index].quantity = 1;
      } else {
        updated[index].quantity = newQty;
      }
      return updated;
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        totalFormatted: '$' + total.toLocaleString('es-CO'),
        addToCart,
        changeQuantity,
        removeItem,
        clearCart,
        itemCount: cartItems.reduce((acc, i) => acc + i.quantity, 0)
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
