import { use, useContext } from "react";
import { Store } from "./context";
// import type { UserType } from "./context";

export default function App() {
  // burada state tutmam lazim ve todoliste props olarak gondermem lazim

  // const { user, credit } = useContext(Store);
  const { user, credit } = use(Store); // react 19

  return (
    <div>
      <TodoList />

      <Theme />

      <h2>{user?.name}</h2>
      <h2>{credit}</h2>
    </div>
  );
}

// ayri dosyalarda hayal et alt kismi
function TodoList() {
  const { setUser, user } = useContext(Store);
  return (
    <div>
      todo list
      <button onClick={() => setUser({ ...user, name: "mustafa sarikoz" })}>
        isim degistir
      </button>
      <TodoItem />
    </div>
  );
}

async function getPlaceholder() {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );
}

function TodoItem() {
  const { credit, setCredit } = useContext(Store);

  return (
    <div>
      todo TodoItem
      <button onClick={() => setCredit(credit - 1)}>kredi dusur</button>
    </div>
  );
}

function Theme() {
  return <div>bende theme dosyasiyim</div>;
}
