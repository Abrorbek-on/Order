import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import Register from "./Pages/Register";
import Send from "./Pages/Send";
import LoginForm from "./Pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
