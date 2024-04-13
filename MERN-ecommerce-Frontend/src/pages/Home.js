import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/footer/Footer";
import Slider from "../features/slider/Slider";
function Home() {
    return (
        <div>
            <NavBar>
                <Slider></Slider>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
    );
}

export default Home;