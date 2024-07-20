import "./header.css";
import YuruCamp from "../assets/yuru-camp-logo.svg";

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-bar">
          <a href="https://github.com/deriana" target="blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.facebook.com/jerri.maruf" target="blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/hi_deri_/" target="blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <img src={YuruCamp} alt="yuru-camp-logo" className="header-logo"></img>
        <div className="nav-bar">
          <p>BOOK</p>
          {/* <i class="fa-solid fa-bars" title="menu">
          </i> */}
        </div>
      </nav>
      <div className="header-title">
        <h2>Yuru Camp</h2>
        <p>A Good Anime About Camping</p>
      </div>
    </header>
  );
}

export default Header;
