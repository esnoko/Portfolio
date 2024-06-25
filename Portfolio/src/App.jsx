import styles from "./App.module.css";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/navbar";

function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
  </div>;
}

export default App;
