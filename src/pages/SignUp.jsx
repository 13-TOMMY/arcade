import { useRef, useState } from "react";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import slim from "../assets/slime-jump-mini-games.json";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const lottieRef = useRef(null);

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, { displayName: name });
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
      <div className="auth-left">
        <div className="left-container-auth light-mode-card-background">
          <h2 className="l-font">Create Your Account</h2>
          <form onSubmit={handleSignup} className="auth-form">
            <div className="auth-form-group">
              <p className="m-font">Name:</p>
              <input
                type="text"
                className="auth-form m-font"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <p className="m-font">Email:</p>
              <input
                type="email"
                className="auth-form m-font"
                placeholder="Enter your eamil"
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
              Sign up
            </motion.button>
          </form>
          <p className="auth-last-p s-font">
            Already have an account?
            <span
              className="auth-form-link s-font"
              onClick={() => navigate("/login")}
            >
              Log in here !
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

export default SignUp;
