import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";


function Header() {
  return (
    <header className='header-container'>
      <Link to="/">arcade.js</Link>
      <div className="search-container">
        <input type="text" placeholder="Search by name, genre, or creator" />
        <HiMagnifyingGlass className='search-icon' />
      </div>
      <div className="buttons-container">
        <button className='btn-primary'>sign in</button>
        <button className='btn-secondary'>register</button>
      </div>
    </header>
  );
}

export default Header;