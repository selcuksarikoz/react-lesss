import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App-4.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// StrictMode, React uygulamalarında geliştirme aşamasında bazı hataları ve potansiyel sorunları tespit etmek için kullanılan bir araçtır. Uygulamanızın performansını artırmak ve daha iyi bir kullanıcı deneyimi sağlamak için önerilen bir yöntemdir. Ancak, üretim ortamında kullanılması önerilmez. Çünkü bazı bileşenlerin iki kez render edilmesine neden olabilir ve bu da performans sorunlarına yol açabilir.
