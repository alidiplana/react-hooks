
import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const [counter,increment, decrement] = useCounter();

  setInterval(() => {
    increment();
  }, 1000);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
