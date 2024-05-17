import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Footer from "./components/Footer/Footer";
import Tool_card from "./components/Tool_card/Tool_card";
import Tool_card_section from "./components/Tool_card/Tool_card_section";


function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Tool_card_section />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
