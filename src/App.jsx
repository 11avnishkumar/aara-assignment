import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
