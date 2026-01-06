import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import StockIn from "./pages/StockIn";
import StockOut from "./pages/StockOut";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Login />} />

      
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Dashboard />
                </div>
              </div>
            </>
          }
        />

        
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Products />
                </div>
              </div>
            </>
          }
        />

        
        <Route
          path="/stockin"
          element={
            <>
              <Navbar />
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <StockIn />
                </div>
              </div>
            </>
          }
        />

      
        <Route
          path="/stockout"
          element={
            <>
              <Navbar />
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <StockOut />
                </div>
              </div>
            </>
          }
        />

        
        <Route
          path="/reports"
          element={
            <>
              <Navbar />
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Reports />
                </div>
              </div>
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
