import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => (
  <>
    <h1 className="title">Bookstore CMS</h1>
    <ul className="navigation">
      <li>
        <Link to="/" className="link">
          Books
        </Link>
      </li>
      <li>
        <Link to="/categories" className="link">
          Categories
        </Link>
      </li>
    </ul>
    <div className="profile">
      <CgProfile className="icon" />
    </div>
  </>
);

export default Navbar;
