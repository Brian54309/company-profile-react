

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Broco from "./pages/Broco";
import Login from "./pages/Login";
import Home from "./components/Home";
import ForgotPass from "./pages/ForgotPass";
import RequireAuth from "./pages/RequireAuth";
import ResetPass from "./pages/ResetPass";
import Register from "./pages/Register";
export default function App() {
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
      <Routes>
        <Route path="/" element={<SafeNavigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/broco" element={<Broco />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/resetpass" element={<ResetPass />} />
      </Routes>
    </>
  );
}
