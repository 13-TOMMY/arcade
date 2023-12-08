import { Link, useNavigate } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import { auth } from "../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { motion } from "framer-motion";

function Header() {
  const [search, setSearch] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.1,
      opacity: 0.9,
    },
    tap: {
      scale: 0.9,
      opacity: 1,
    },
  };

  return (
    <header className="header-container">
      <Link to="/">arcade.js</Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, genre, or creator"
          value={search}
          onChange={handleSearchChange}
        />
        <HiMagnifyingGlass className="search-icon" />
      </div>
      <div className="buttons-container">
        {user ? (
          <div className="accounts-welcome-user">
            <div className="text-loggedin">
              <p>Welcome,</p>
              <span>
                {`${user.displayName ? user.displayName : user.email}!`}
              </span>
            </div>
            <motion.button
              className="logout-a-btn"
              onClick={() => signOut(auth)}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <BiLogOut className="signout-btn" />
            </motion.button>
          </div>
        ) : (
          <>
            <motion.button
              className="login-a-btn a-btn"
              onClick={() => navigate("/login")}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Log in
            </motion.button>
            <motion.button
              className="signup-a-btn a-btn"
              onClick={() => navigate("/signup")}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Sign up
            </motion.button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
