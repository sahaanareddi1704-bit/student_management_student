import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/authendication/login";
import Register from "./component/authendication/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;