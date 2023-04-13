import "bootstrap/dist/css/bootstrap.min.css";
import "./navNavNav.css";

export default function nav() {
  return (
    <div className="containerB">
      <div className="search-gr">
        <img src="./home-logo.svg" alt="" className="nav-img" />
        <nav className="bg-body-tertiary search-bx">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 search-bx"
                type="search"
                placeholder="... جستوجو"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </div>

      <div className="menu-gr">
        <a href="/profile">
          <img src="./images/user.svg" alt="" className="profile-icon" />
        </a>
        <a href="">
          <img src="./images/nav-jobs.svg" alt="" className="home-icon" />
        </a>
        <a href="">
          <img src="./images/nav-messaging.svg" alt="" className="home-icon" />
        </a>
        <a href="/home">
          <img src="./images/nav-home.svg" alt="" className="home-icon" />
        </a>
      </div>
    </div>
  );
}
