import { createContext, useContext, useState } from "react";

const StockContext = createContext();
export const useStock = () => useContext(StockContext);

export function StockProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [todayIn, setTodayIn] = useState(0);
  const [todayOut, setTodayOut] = useState(0);

  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

  // ADD PRODUCT
  const addProduct = (name, qty) => {
    setProducts([...products, { name, quantity: qty }]);
  };

  // STOCK IN
  const stockIn = (name, qty) => {
    setProducts(
      products.map(p =>
        p.name === name
          ? { ...p, quantity: p.quantity + qty }
          : p
      )
    );

    setTransactions([
      ...transactions,
      {
        type: "IN",
        name,
        qty,
        date: today,
        time: new Date().toLocaleTimeString(),
      },
    ]);

    setTodayIn(todayIn + qty);
  };

  // STOCK OUT
  const stockOut = (name, qty) => {
    setProducts(
      products.map(p =>
        p.name === name
          ? { ...p, quantity: p.quantity - qty }
          : p
      )
    );

    setTransactions([
      ...transactions,
      {
        type: "OUT",
        name,
        qty,
        date: today,
        time: new Date().toLocaleTimeString(),
      },
    ]);

    setTodayOut(todayOut + qty);
  };

  return (
    <StockContext.Provider
      value={{
        products,
        addProduct,
        stockIn,
        stockOut,
        todayIn,
        todayOut,
        transactions,
      }}
    >
      {children}
    </StockContext.Provider>
  );
}
