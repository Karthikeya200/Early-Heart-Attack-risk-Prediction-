import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { RiskForm } from "./pages/RiskForm";
import { Results } from "./pages/Results";
import { About } from "./pages/About";
import { Explanations } from "./pages/Explanations";
import { Tips } from "./pages/Tips";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assess" element={<RiskForm />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/explanations" element={<Explanations />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
