import App from "./App";
import Atlantic from "./atlantic";
import Pacific from "./pacific";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";
import Customers from "./Admin/Customers";
import Products from "./Admin/Products";
import AdminIndex from "./Admin/AdminIndex";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="atlantic" element={<Atlantic />} />
        <Route path="pacific" element={<Pacific />} />
        <Route path="admin" element={<AdminDashboard />}>
          <Route path="index" element={<AdminIndex />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
