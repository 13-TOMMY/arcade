import { useRef, useState } from "react";
import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import slim from "../assets/slime-jump-mini-games.json";


function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const lottieRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
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
    <div className="login-container">
      <div className="login-left">
        <div className="left-container-li">
          <h2>Welcome Back - Log In</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="li-form-group">
              <p>Email:</p>
              <input
                type="email"
                className="li-form"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p>Password:</p>
              <input
                type="password"
                className="li-form"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <motion.button
              className="li-form-btn"
              type="submit"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Login
            </motion.button>
          </form>
          <p className="li-last-p">
            Don't have an account?
            <span className="li-form-link" onClick={() => navigate("/signup")}>
              Sign up here !
            </span>
          </p>
        </div>
      </div>
      <div className="login-right">
        <Lottie
          animationData={slim}
          loop={true}
          lottieRef={lottieRef}
          onComplete={() => {
            // lottieRef.current.goToAndPlay(100, false);
            lottieRef.current.setSpeed(0.5);
          }}
        />
      </div>
    </div>
  );
}

export default LogIn;
