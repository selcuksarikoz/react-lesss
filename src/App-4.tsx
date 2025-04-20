import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Selcuk from "./pages/selcuk";
import Mustafa from "./pages/mustafa";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/selcuk/:id?" element={<Selcuk />}></Route>
        <Route path="/mustafa" element={<Mustafa />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
