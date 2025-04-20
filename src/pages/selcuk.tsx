import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Selcuk() {
  const { id } = useParams();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchApi(id).then((res) => console.log(res));
  }, [id]);

  useEffect(() => {
    console.log("useeffect page calisti");

    newFetchApi(page);

    return () => {
      console.log("componentten ciktim");
    };
  }, [page]);

  async function newFetchApi(page: number = 1) {
    console.log(page);
  }

  function pageIncrease() {
    setPage((prev) => prev + 1);
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
