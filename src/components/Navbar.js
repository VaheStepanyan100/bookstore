import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => (
  <Nav>
    <h1 className="title">Bookstore CMS</h1>
    <ul className="navigation">
      <li>
        <Link to="/" className="link">
          BOOKS
        </Link>
      </li>
      <li>
        <Link to="/categories" className="link">
          CATEGORIES
        </Link>
      </li>
    </ul>
    <div className="profile">
      <CgProfile className="icon" />
    </div>
  </Nav>
);

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 5.938rem;
  padding: 0, 6.25rem;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;

  .title {
    width: 15rem;
    height: 2.313rem;
    margin: 0 3rem;
    font-family: Montserrat;
    font-size: 1.875rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #0290ff;
  }
  .navigation {
    display: flex;
    list-style: none;
    gap: 2.5rem;

    .link {
      width: 3.688rem;
      height: 1rem;
      margin: 1.125rem 2.563rem 0.688 0;
      font-family: Montserrat;
      font-size: 0.813rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1.9px;
      color: #121212;
    }
  }
  .profile {
    margin-left: auto;

    .icon {
      width: auto;
      margin: 0 3rem;
      height: 2.813rem;
      color: #0290ff;
    }
  }
`;
