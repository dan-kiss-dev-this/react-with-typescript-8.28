import React from 'react';

export default function ReactTypeScript1(props: any) {
  const [stateOfCount, setStateOfCount] = React.useState(0)

  const changeCount = () => setStateOfCount(stateOfCount + 1)
  return (
    <>
      <h1 onClick={changeCount}>The count is {stateOfCount} {props.name}</h1>
    </>
  );
}