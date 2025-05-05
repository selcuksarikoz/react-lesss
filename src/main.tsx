import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Compound from "./App-9.tsx";
import Management from "./context.tsx";

// String.prototype.reversed = function () {
//   console.log(this.split("").reverse().join(""));
// };

// String.prototype.toUpperCase = function () {
//   return this.toUpperCase();
// };

// function reversed(value: string) {
//   return value.split("").reverse().join("");
// }

// reversed("Selcuk");

// console.log("Selcuk".reversed());

// ----

// Set.prototype.toArray = function () {
//   return Array.from(this);
// };

// new Set().toArray();
// Array.from(new Set())
// [] = Array
// [1,2,3,4,5].findIndex(it => it === 1)

// const a = new Set<number>([1, 2, 3, 4, 5]);
// a.add(6);
// a.add(6);
// a.add(6);
// console.log(a);

// const b = new Map<string, number>();
// b.set("1", 33);
// b.has("1");

// const m = {
//   a: 1,
//   b: 2,
// };
// m["a"] = 3;
// if(m?.[key]) {

// }

console.log(b);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Management>
      <Compound />
    </Management>
  </StrictMode>
);

// StrictMode, React uygulamalarında geliştirme aşamasında bazı hataları ve potansiyel sorunları tespit etmek için kullanılan bir araçtır. Uygulamanızın performansını artırmak ve daha iyi bir kullanıcı deneyimi sağlamak için önerilen bir yöntemdir. Ancak, üretim ortamında kullanılması önerilmez. Çünkü bazı bileşenlerin iki kez render edilmesine neden olabilir ve bu da performans sorunlarına yol açabilir.
