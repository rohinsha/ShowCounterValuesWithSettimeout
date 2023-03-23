import "./styles.css";
import { useState, useEffect } from "react";
export default function CountDown(props) {
  const [counterVal, setCounterVal] = useState(props.start);
  useEffect(() => {
    if (counterVal > 0) {
      setTimeout(() => {
        setCounterVal(counterVal - 1);
      }, 1000);
    }
  }, [counterVal]);
  return <h1>{counterVal}</h1>;
}
