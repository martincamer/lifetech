import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer.jsx";
import { Nosotros } from "./routes/Nosotros.jsx";
import { ComoTrabajamos } from "./routes/ComoTrabajamos.jsx";
import { Servicios } from "./routes/Servicios.jsx";
import { Work } from "./routes/Work.jsx";
import { Blog } from "./routes/Blog.jsx";
import { UnicoBlog } from "./routes/UnicoBlog.jsx";
import { Contacto } from "./routes/Contacto.jsx";
import { DesarrolloWeb } from "./routes/DesarrolloWeb.jsx";
import { DesarrolloSoftware } from "./routes/DesarrolloSoftware.jsx";
import { DesarrolloAplicaciones } from "./routes/DesarrolloAplicaciones.jsx";
import { DesarrolloMovil } from "./routes/DesarrolloMovil.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location]);

  const getPageTitle = (path) => {
    switch (path) {
      case "/":
        return "Lifetech software solutions";
      case "/nosotros":
        return "Lifetech Nosotros";
      case "/como-trabajamos":
        return "Lifetech - Cómo Trabajamos";
      case "/servicios":
        return "Lifetech - Servicios";
      case "/work":
        return "Lifetech - Trabajo";
      case "/blog":
        return "Lifetech - Blog";
      case "/contacto":
        return "Lifetech - Contacto";
      case "/servicio/desarrollo-web":
        return "Lifetech - Desarollo web";
      default:
        return "Lifetech software solutions";
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:url" element={<UnicoBlog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicio/desarrollo-web" element={<DesarrolloWeb />} />
        <Route
          path="/servicio/desarrollo-software"
          element={<DesarrolloSoftware />}
        />
        <Route
          path="/servicio/desarrollo-app"
          element={<DesarrolloAplicaciones />}
        />
        <Route
          path="/servicio/desarrollo-movil"
          element={<DesarrolloMovil />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
