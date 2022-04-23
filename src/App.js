import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Pages from "./pages/Pages";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
