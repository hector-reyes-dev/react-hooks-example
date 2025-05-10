import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { UseStatePage } from "./pages/UseStatePage";
import { UseEffectPage } from "./pages/UseEffectPage";
import { UseContextPage } from "./pages/UseContextPage";
import { UseRefPage } from "./pages/UseRefPage";
import { UseReducerPage } from "./pages/UseReducerPage";
import { UseMemoPage } from "./pages/UseMemoPage";
import { UseCallbackPage } from "./pages/UseCallbackPage";
import { CustomHooksPage } from "./pages/CustomHooksPage";

function App() {
  return (
    <div className="app-layout"> {/* Nuevo div contenedor */}
      <Navbar />
      <div className="content-area"> {/* Nuevo div para el contenido */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/usestate" element={<UseStatePage />} />
          <Route path="/useeffect" element={<UseEffectPage />} />
          <Route path="/usecontext" element={<UseContextPage />} />
          <Route path="/useref" element={<UseRefPage />} />
          <Route path="/usereducer" element={<UseReducerPage />} />
          <Route path="/usememo" element={<UseMemoPage />} />
          <Route path="/usecallback" element={<UseCallbackPage />} />
          <Route path="/customhooks" element={<CustomHooksPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
