
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CollectionOfCards from "./CollectionOfCards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<CollectionOfCards />} />
        <Route path="/newbook" element={<NewBook />} />
      </Routes>
    </div>
  );
}

export default App;
