import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Details from "./component/Details";
function App() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
