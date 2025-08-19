// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <main className="min-h-[80vh] p-6">
      <Outlet />
    </main>
    <Footer />
  </>
);


export default Layout;
