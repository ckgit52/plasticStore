import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;