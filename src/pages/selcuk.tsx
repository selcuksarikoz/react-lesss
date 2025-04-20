import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type standart = Record<string, number>;

export default function Selcuk() {
  const { id } = useParams();

  const [page, setPage] = useState<number>(1);
  const [mustafa, setMustafa] = useState<Record<string, number>>({
    name: "mustafa",
    age: 23,
  } as unknown as standart);
  const [selcuk, setSelcuk] = useState<string[]>([]);

  useEffect(() => {
    fetchApi(id).then((res) => console.log(res));
  }, [id]);

  useEffect(() => {
    console.log("useeffect page calisti");

    newFetchApi(page);

    return () => {
      console.log("componentten ciktim");
    };
  }, [page, mustafa?.name]);

  async function newFetchApi(page: number = 1) {
    console.log(page);
  }

  function pageIncrease() {
    // setPage((prev) => prev + 1);
    setMustafa((prev) => ({ ...prev, age: prev.age + 1 }));
  }

  return (
    <div>
      ben mustafa pages
      <Link to={"/mustafa"}>mustafa</Link>
      <Link to={"/home"}>home</Link>
      <button onClick={pageIncrease}>arttir</button>
    </div>
  );
}

async function fetchApi(id?: string) {
  if (!id) return;

  return new Promise((resolve) => {
    return setTimeout(() => resolve({ statusCode: 200, message: id }), 3000);
  });
}
