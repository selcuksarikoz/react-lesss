import { JSX } from "react";

export default function Compound() {
  return (
    <div>
      <List>
        <List.Toggle />
        <List.ListItem />
        <List.ListItem />
        <List.ListItem />
      </List>
    </div>
  );
}

export function List({ children }: { children: JSX.Element[] }) {
  return (
    <div>
      ana container
      {children}
    </div>
  );
}

// ayni dosyada olmak zorunda degil
// function ListItem() {
//   return <div>list item</div>;
// }

// List.ListItem = ListItem;

export namespace List {
  export function Toggle() {
    return <div>ben bir toggle butonum</div>;
  }
  export function ListItem() {
    return <div>list item</div>;
  }
}
