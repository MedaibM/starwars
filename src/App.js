import People from "./Components/People";
import Planets from "./Components/Planets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Films from "./Components/Films";
import Starships from "./Components/Starships";


function App() {
  return (
    <div className="App">
      <h1> STAR WARS</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<People />} />
          <Route path="/People" element={<People />} />
          <Route path="/Planets" element={<Planets />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/Starships" element={<Starships />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
