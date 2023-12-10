import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Game from "./pages/Game";

function App() {
  return (
    <div className="application-container">
      <svg
        className="background-app-svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="pppixelate-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(0 0) scale(14.1) rotate(0)"
            shape-rendering="crispEdges"
          >
            <rect
              width="1"
              height="1"
              x="0"
              y="0"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="0"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="0"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="0"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="0"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="0"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="0"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="1"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="1"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="1"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="1"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="1"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="1"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="1"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="2"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="2"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="2"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="2"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="2"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="2"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="2"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="3"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="3"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="3"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="3"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="3"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="3"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="3"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="4"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="4"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="4"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="4"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="4"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="4"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="4"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="5"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="5"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="5"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="5"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="5"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="5"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="5"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="6"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="6"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="6"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="6"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="6"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="6"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="6"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="7"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="7"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="7"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="7"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="7"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="7"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="7"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="7"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="7"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="8"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="8"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="8"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="8"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="8"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="8"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="8"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="8"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="8"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="8"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="8"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="9"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="9"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="9"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="9"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="9"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="9"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="9"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="9"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="9"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="9"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="9"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="9"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="10"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="10"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="10"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="10"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="10"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="10"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="10"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="10"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="10"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="10"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="10"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="10"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="11"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="11"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="11"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="11"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="11"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="11"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="11"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="11"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="11"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="11"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="11"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="12"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="12"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="12"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="12"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="12"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="12"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="12"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="12"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="12"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="13"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="13"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="13"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="13"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="13"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="13"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="13"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="14"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="14"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="14"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="14"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="14"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="14"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="14"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="15"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="15"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="15"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="15"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="15"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="15"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="15"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="16"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="16"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="16"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="16"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="16"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="16"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="16"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="17"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="17"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="17"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="17"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="17"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="17"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="17"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="18"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="18"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="18"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="18"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="18"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="18"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="18"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="0"
              y="19"
              fill="hsl(0, 0%, 100%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="1"
              y="19"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="2"
              y="19"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="19"
              fill="hsl(28, 100%, 71%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="17"
              y="19"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="18"
              y="19"
              fill="hsl(50, 98%, 50%)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="19"
              y="19"
              fill="hsl(50, 98%, 50%)"
            ></rect>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pppixelate-pattern)"></rect>
      </svg>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/game/:gameID" element={<Game />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
