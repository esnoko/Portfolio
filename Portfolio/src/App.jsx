import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/navbar";

function App() {
  return <div className={styles.App}>
    <Navbar/>
  </div>;
}

export default App;
