import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Battailles from "./pages/Batailles";
import Personnages from "./pages/Personnages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/batailles" element={<Battailles/>} />
        <Route path="/personnages" element={<Personnages/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
