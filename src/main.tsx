import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppHook from "./App-7.tsx";
import Management from "./context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Management>
      <AppHook />
    </Management>
  </StrictMode>
);

// StrictMode, React uygulamalarında geliştirme aşamasında bazı hataları ve potansiyel sorunları tespit etmek için kullanılan bir araçtır. Uygulamanızın performansını artırmak ve daha iyi bir kullanıcı deneyimi sağlamak için önerilen bir yöntemdir. Ancak, üretim ortamında kullanılması önerilmez. Çünkü bazı bileşenlerin iki kez render edilmesine neden olabilir ve bu da performans sorunlarına yol açabilir.
