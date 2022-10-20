import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import NavBar from "../components/Navbar";
import DeparmentDetail from "../pages/DepartmentDetail";
import PersonelCreate from "../pages/PersonelCreate";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/detail/:str" element={<PrivateRouter />}>
          <Route path="" element={<DeparmentDetail />} />
        </Route>
        <Route path="/create-personel" element={<PrivateRouter />}>
          <Route path="" element={<PersonelCreate />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
