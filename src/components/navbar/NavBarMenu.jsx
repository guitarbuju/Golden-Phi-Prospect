import './navbar.css'

const NavBarMenu = () => {
  return (
    <div className="gpt3__navbar-menu_container scale-up-center">
      <div className="gpt3__navbar-menu_container-links">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wgpt3">What is GOLDEN PHI?</a>
        </p>
        <p>
          <a href="#importance">Importance</a>
        </p>
        <p>
          <a href="#value">Value</a>
        </p>
        <p>
          <a href="#blog">Blog</a>
        </p>
      </div>
      <div className="gpt3__navbar-menu_container-links-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default NavBarMenu;
