import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ui/ScrollProgress";

const RootLayout = () => {
  return (
    <div className="overflow-x-hidden text-[var(--text-secondary)] antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <ScrollProgress />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--bg-primary)]" />
        <div className="absolute -left-40 top-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
