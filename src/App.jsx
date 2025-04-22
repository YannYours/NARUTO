import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Battailles from "./pages/Batailles";
import Personnages from "./pages/Personnages";
import APropos from "./pages/APropos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/batailles" element={<Battailles />} />
        <Route path="/personnages" element={<Personnages />} />
        <Route path="/apropos" element={<APropos />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
