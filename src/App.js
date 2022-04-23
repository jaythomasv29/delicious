import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import styled from 'styled-components'
import Pages from "./pages/Pages";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Logo to={'/'}>
          <GiKnifeFork />
          Deliciousness
        </Logo>
      </Nav>
      <SearchBar />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  margin: 0 auto;
  padding: 20px;
  text-decoration: none;
  font-size: 3.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  color: black;
  margin-bottom: 20px;
`

const Nav = styled.div`
text-align: center;
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`

export default App;
