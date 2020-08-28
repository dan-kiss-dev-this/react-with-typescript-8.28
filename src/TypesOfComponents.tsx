import React from 'react';

// we annotate the function type as we return a function which we can invoke
//what are you annotating and what type of value does this App variable hold? we are annotating the function type becuase this variable holds a function. React.FC indicates a React Function Component
//here the variable holds a function, when the function is invoked it can return something different but we have a type of function


type Props1 = {
  name: string
}

const App: React.FC<Props1> = ({ name }) => {
  return (
    <div>yo</div>
  )
}

//when we type a react component as a function declaration we ask the same thing, this time we are annotating the function return type so typescript knows this function here is going to return a react component. 
// in @types/react declaration file ReadNode is a union type which is ReactChild or ReactFragment or ReactPOrtal or boolean or null or undefined
function App2({ name }: Props1): React.ReactNode {
  return (
    <div>yo2</div>
  )
}

export default App;