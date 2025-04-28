import { useMemo, useState } from "react";

export default function useLocalstorage(yaricap: number, deps: []) {
  // const [initialData, setInitialData] = useState({});

  // return {
  //   initialData,
  //   setInitialData,
  // };

  const hesapla = useMemo(() => yaricap * yaricap * 3.14, [...(deps || [])]);

  return hesapla;
}
