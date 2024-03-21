import Navbar from "./components/Navbar.js";
import Categories from "./components/Categories.js";
import SaleImage from "./components/sale-image.js";
import Recommended from "./components/Recommended.js";
import Topics from "./components/Topics.js";
import Popular from "./components/Popular.js";
import Footer from './components/Footer.js';

function App()
{
  return(
    <>
      <Navbar></Navbar>
      <Categories></Categories>
      <SaleImage></SaleImage>
      <Recommended></Recommended>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </>
  )
}

export default App