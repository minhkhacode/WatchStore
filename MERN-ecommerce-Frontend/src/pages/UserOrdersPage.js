import Footer from '../features/common/footer/Footer';
import NavBar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
        <UserOrders></UserOrders>
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default UserOrdersPage;
