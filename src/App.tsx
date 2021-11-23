import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserDetail/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
