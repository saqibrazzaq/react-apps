import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import Database from './Pages/Database/Database';
import Functions from './Pages/Functions/Functions';
import Hosting from './Pages/Hosting/Hosting';
import MachineLearning from './Pages/MachineLearning/MachineLearning';
import Storage from './Pages/Storage/Storage';

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="storage" element={<Storage />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="functions" element={<Functions />} />
        <Route path="machine-learning" element={<MachineLearning />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
