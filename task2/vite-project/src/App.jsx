import { Outlet } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
