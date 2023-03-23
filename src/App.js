import "./styles.css";
import CountDown from "./CountDown";
export default function App() {
  return (
    <div className="App">
      <CountDown start={10} />
    </div>
  );
}
