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
    <div className="auth-container">
      <div className="auth-left ">
        <div className="left-container-auth light-mode-card-background">
          <h2 className="l-font">Welcome Back - Log In</h2>
          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-form-group">
              <p className="m-font">Email:</p>
              <input
                type="email"
                className="auth-form m-font"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p className="m-font">Password:</p>
              <input
                type="password"
                className="auth-form m-font"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <motion.button
              className="auth-form-btn m-font"
              type="submit"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Login
            </motion.button>
          </form>
          <p className="auth-last-p s-font">
            Don't have an account?
            <span
              className="auth-form-link s-font"
              onClick={() => navigate("/signup")}
            >
              Sign up here !
            </span>
          </p>
        </div>
      </div>
      <div className="auth-right">
      <div className="right-container light-mode-card-background">
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
    </div>
  );
}

export default LogIn;
