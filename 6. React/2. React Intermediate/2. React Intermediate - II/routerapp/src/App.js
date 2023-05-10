import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import Support from "./Components/Support";
import Labs from "./Components/Labs";
import About from "./Components/About";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">

    <nav>
      <ul>
      <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/labs">Labs</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="*">NotFound</NavLink>
        </li>
      </ul>
    </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/labs" element={<Labs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />        
      </Routes>
    </div>
  );
}

export default App;
