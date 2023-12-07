import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";


function Header() {

  const [search, setSearch] = useState('')

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <header className='header-container'>
      <Link to="/">arcade.js</Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, genre, or creator"
          value={search}
          onChange={handleSearchChange}
        />
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