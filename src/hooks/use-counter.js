import { useState } from "react";

const useCounter = (value = true) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (value) {
  //       setCounter((prevCounter) => prevCounter + 1);
  //     } else {
  //       setCounter((prevCounter) => prevCounter - 1);
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [value]);

  return [counter, increment, decrement];
};

export default useCounter;
