import "./styles.css";
import Timer from "./Timer";

export default function App() {
  return (
    <div className="App">
      <h2>TIMER</h2>
      <Timer start={0} end={15} />
    </div>
  );
}
