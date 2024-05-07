
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CollectionOfCards from "./CollectionOfCards";
import NewBook from "./NewBook";
import BookDetails from "./BooksDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<CollectionOfCards />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/newbook" element={<NewBook />} />
      </Routes>
    </div>
  );
}

export default App;
