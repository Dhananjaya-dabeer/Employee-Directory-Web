import { useState } from "react";
import "./App.css";
import Login from "./Components/Login.compnents";
import Dashboard from "./Components/Dashboard.components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Components/Users.components";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
