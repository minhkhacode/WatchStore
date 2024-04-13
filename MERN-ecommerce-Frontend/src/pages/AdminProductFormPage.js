import ProductForm from "../features/admin/components/ProductForm";
import Footer from "../features/common/footer/Footer";
import NavBar from "../features/navbar/Navbar";
function AdminProductFormPage() {
    return (
        <div>
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
            <Footer></Footer>
        </div>
    );
}

export default AdminProductFormPage;