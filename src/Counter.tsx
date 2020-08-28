import React from "react";

interface Props {
  children: (count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>) => JSX.Element | null
}

const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = React.useState(1);
  return (
    <div>
      {children(count, setCount)}
    </div>
  );
}

export default Counter;