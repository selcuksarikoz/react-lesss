import { useRef, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const lastInputRef = useRef<string>("");

  function onClick() {
    if (!inputRef?.current || !inputRef?.current.value) return;

    if (lastInputRef.current === inputRef.current.value) {
      console.log("yapma kardes bir oncekiyle ayni");
      return;
    }

    setTodos((prev) => [...prev, inputRef.current.value]);

    inputRef.current.value = "";

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }

  return (
    <div>
      <input className="input" type="text" ref={inputRef} />

      <button onClick={onClick}>tikla</button>

      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
}
