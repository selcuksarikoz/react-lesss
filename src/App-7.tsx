import { useEffect } from "react";
import useLocalstorage from "./hooks/useLocalstorage.hook";
import useResize from "./hooks/useResize.hook";

export default function AppHook() {
  const { currentWidth } = useResize();
  console.log(currentWidth);

  // const { setInitialData, initialData } = useLocalstorage();
  const hesapla = useLocalstorage(6, [currentWidth]);

  useEffect(() => {
    // use hook instead
    window.addEventListener("resize", aa, false);

    return () => {
      window.removeEventListener("resize", aa, false);
    };
  }, []);

  // useEffect(() => {
  //   setInitialData({
  //     mustafa: "mustafa naber abi?",
  //   });

  //   setTimeout(() => {
  //     setInitialData({
  //       mustafa: "mustafa abi 5 saniye sonra ben degistim",
  //     });
  //   }, 5000);
  // }, []);

  console.log(hesapla);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure distinctio
      totam facilis, hic voluptates praesentium tempore repellat rerum vero a
      mollitia sed reiciendis autem, suscipit dolor eveniet eius quo
      <button>Click Me</button>
    </div>
  );
}
