import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import WebSeries from "./Pages/WebSeries/WebSeries";
import Movie from "./Pages/Movie/Movie";
import Book from "./Pages/Book/Book";
import VideoGame from "./Pages/VideoGame/VideoGame";
import Nav from "./components/Nav/Nav";

function App() {
  return (
   <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/webseries" element={<WebSeries />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/book" element={<Book />} />
      <Route path="/videogame" element={<VideoGame />} />
    </Routes>
   </div>
  );
}

export default App;
