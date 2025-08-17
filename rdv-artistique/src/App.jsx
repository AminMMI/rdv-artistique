// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import AteliersAdultes from "./pages/AteliersAdultes";
import AteliersEnfants from "./pages/AteliersEnfants";
import LesPetitsPlus from "./pages/LesPetitsPlus";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/ateliers-adultes" element={<AteliersAdultes />} />
          <Route path="/ateliers-enfants" element={<AteliersEnfants />} />
          <Route path="/les-petits-plus" element={<LesPetitsPlus />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
