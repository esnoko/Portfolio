import styles from "./App.module.css";
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/experience";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/navbar";

function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
  </div>;
}

export default App;
