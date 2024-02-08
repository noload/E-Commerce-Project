import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/Home";
import Details from "./component/Details";
function App() {
  const { pathname, search } = useLocation();
  console.log(pathname, search);
  return (
    <>
      <div className="w-screen  h-screen flex">
        {(pathname != "/" || search.length > 0) && (
          <Link
            to="/"
            className="absolute left-56 top-5 px-3 py-1 font-semibold text-white bg-blue-400 rounded-md hover:bg-blue-500"
          >
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
