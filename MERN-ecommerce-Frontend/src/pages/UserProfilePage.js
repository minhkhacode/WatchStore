import Footer from '../features/common/footer/Footer';
import NavBar from '../features/navbar/Navbar';
import UserProfile from '../features/user/components/UserProfile';

function UserProfilePage() {
  return (
    <div>
      <NavBar>
        <UserProfile></UserProfile>
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default UserProfilePage;