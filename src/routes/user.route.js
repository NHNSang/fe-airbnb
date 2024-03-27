import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";

export default function User() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      
    </Routes>
  );
};