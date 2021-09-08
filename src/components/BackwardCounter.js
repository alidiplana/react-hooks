import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  const [counter, increment, decrement] = useCounter(false);

  setInterval(() => {
    decrement();
  }, 1000);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
