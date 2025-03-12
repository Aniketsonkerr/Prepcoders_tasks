import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
