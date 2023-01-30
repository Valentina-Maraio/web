import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import About from './components/about/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
