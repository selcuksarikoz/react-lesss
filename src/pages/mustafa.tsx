import { Link } from "react-router-dom";

export default function Mustafa() {
  return (
    <div>
      ben mustafa pages
      <Link to={"/selcuk"}>selcuk</Link>
      <Link to={"/home"}>home</Link>
    </div>
  );
}
