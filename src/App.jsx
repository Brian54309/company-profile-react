
import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Broco from "./pages/Broco";
import Login from "./pages/Login";
import ForgotPass from "./pages/ForgotPass";
import ResetPass from "./pages/ResetPass";
import Register from "./pages/Register";
import Panasonic from "./pages/Panasonic";
export default function App() {


function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // delay to allow DOM rendering
      }
    }
  }, [location]);

  return null;
}



  const sanitizePath = (path) => {
    try {
      const decodedPath = decodeURIComponent(path);
      const safePath = decodedPath.replace(/[^a-zA-Z0-9-_/]/g, "");
      return safePath.startsWith("/") ? safePath : `/${safePath}`;
    } catch {
      return "/notfound";
    }
  };

  const SafeNavigate = ({ to }) => {
    const location = useLocation();
    const sanitizedTo = sanitizePath(to || location.pathname);
    return <Navigate to={sanitizedTo} replace />;
  };
  return (
    <>

    <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<SafeNavigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            // <RequireAuth>
              <MainPage />
            /* </RequireAuth> */
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/broco" element={<Broco />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/panasonic" element={<Panasonic />} />
      </Routes>
    </>
  );
}
