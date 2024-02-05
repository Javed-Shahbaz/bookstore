import Navbar from "./Component/Navbar/Navbar";
import './App.css';
import { Route, Routes } from "react-router-dom";
import BookStore from "./Component/Book/BookStore";
import Categories from "./Component/Categories/Categories";
function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
    <Route exact path="/books" element={<BookStore />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="*" element={<h1>Invalid Routes</h1>} />
    </Routes>
    </>
  )
}

export default App;
