import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserInformation from "./pages/UserInformation";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UserInformation />} />
    </Routes>
  );
}

export default App;
