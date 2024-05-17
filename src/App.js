import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import Tool_card_section from "./components/Tool_card/Tool_card_section";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tool" element={<Tool_card_section />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
