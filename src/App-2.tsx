import { FormEvent, memo, useMemo, useRef, useState } from "react";

type Todo = {
  id: string;
  text: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Todo 1" },
    { id: "2", text: "Todo 2" },
    { id: "3", text: "Todo 3" },
  ]);

  const [value, setValue] = useState("");

  const lastText = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      {
        id: String(todos.length + 1),
        text: lastText.current || "",
      },
    ]);
    // setValue("");
    inputRef.current?.focus();
    inputRef.current.value = null;
    lastText.current = "";
  }

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) =>
        todo.text.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ),
    [todos, value]
  );

  // console.log(filteredTodos);

  console.log(111);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => {
            // setValue(e.target.value);
            lastText.current = e.target.value;
          }}
        />
        <button type="submit">Add</button>
      </form>
      =========
      {todos.map((todo) => (
        <TodoView key={todo.id} {...todo} />
      ))}
    </div>
  );
}

const TodoView = memo(
  (props: Todo) => {
    // console.log("todoview");

    return <div>{props.text}</div>;
  },
  (prev, next) => prev.text === next.text
  // true donuyorsa compopnetn render olmaz, false ise re-render olur
);
