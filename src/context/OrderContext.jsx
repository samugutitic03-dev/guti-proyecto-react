import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderData, setOrderData] = useState(() => {
    try {
      const saved = localStorage.getItem('turtlePedido');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [orderArrived, setOrderArrived] = useState(false);

  const saveOrder = (data) => {
    setOrderData(data);
    setOrderArrived(false);
    try {
      localStorage.setItem('turtlePedido', JSON.stringify(data));
    } catch {
      // ignore
    }
  };

  const markAsArrived = () => {
    setOrderArrived(true);
  };

  const clearOrder = () => {
    setOrderData(null);
    setOrderArrived(false);
    try {
      localStorage.removeItem('turtlePedido');
    } catch {
      // ignore
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orderData,
        orderArrived,
        saveOrder,
        markAsArrived,
        clearOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
