import { Navigate, Route, Routes } from "react-router-dom";

import { useModoAula } from "./hooks/useModoAula";
import AplicativoPage from "./pages/AplicativoPage";
import CameraPage from "./pages/CameraPage";
import EscolherPage from "./pages/EscolherPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const modoAula = useModoAula();

  return (
    <Routes>
      <Route path="/" element={<EscolherPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/camera" element={<CameraPage modoAula={modoAula} />} />
        <Route
          path="/aplicativo"
          element={<AplicativoPage curso={modoAula.curso} aulas={modoAula.aulas} />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
