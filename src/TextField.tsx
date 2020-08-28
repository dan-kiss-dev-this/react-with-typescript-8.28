import React from 'react'

interface Person {
  firstName: string;
  lastName: string;
}

// note a function is annotated with () => arrow and then a return type like void if nothing returned or number etc what you want
interface Props {
  text: string,
  ok?: boolean,
  i?: number,
  fn?: (bob: string) => void,
  person?: Person,
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
  text: string
}

type Actions =
  { type: 'add', text: string } |
  { type: "remove", idx: number };

interface Todo {
  text: string,
  complete: boolean
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, i) => action.idx !== i);
    default:
      return state;
  }
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = React.useState<number | null | undefined | string>(5);
  const [count2, setCount2] = React.useState<TextNode>({ text: 'hi' });
  const [todos, dispatch] = React.useReducer(TodoReducer, []);

  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div>
      hi
      {JSON.stringify(todos)}
      {/* <input ref={inputRef} onChange={() => handleChange} /> */}
      <button onClick={() => {
        dispatch({ type: "add", text: '...' })
      }}>Click me</button>
    </div>
  )
}
