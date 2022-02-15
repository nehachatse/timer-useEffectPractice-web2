import React from "react";

export default function Timer({ start, end }) {
  const [count, setCount] = React.useState(start);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => (prev === end ? prev : prev + 1));
    }, 1000);

    return () => {
      console.log("cleaning");
      clearInterval(id);
    };
  }, []);
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(start)}>RESET</button>
    </div>
  );
}
