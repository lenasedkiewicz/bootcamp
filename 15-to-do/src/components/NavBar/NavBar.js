import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navigation}>
          <Link to="/"><i className={styles.icon + " fa fa-tasks"} aria-hidden="true"></i></Link>
            <Link to="/" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/favourite"
              >
                Favourite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
export default NavBar;
