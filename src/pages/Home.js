import { useEffect, useRef, useState } from "react"
import Typewriter from 'typewriter-effect';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import { Bounce, Fade } from "react-reveal";
import Contact from "../components/Contact";
import Intro from "../components/intro";
import BottomBar from "../components/BottomBar";
import Skills from "../components/skills";
import Projects from "../components/projects";
import me from '../assets/avatar.jpg'
import bg from '../assets/drk1.jpg'
import Loading from "./loading";
import Footer from "../components/footer";

export default function Home() {
  const [picLoaded, setPicLoaded] = useState(false)
  const [picLoaded1, setPicLoaded1] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      const img = new Image();
      const img1 = new Image();
      img.onload = () => setPicLoaded(true)
      img1.onload = () => setPicLoaded1(true)
      img.src = me
      img1.src = bg
    }, 2500);
  }, [])
if(!picLoaded || !picLoaded1) return <Loading/>
  return (
    <div className="home text-white">

      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <BottomBar />
      <Footer/>
      <br />
      <br />
      <br />

    </div>
  )
}
