import { useEffect } from "react";
import { Button } from "./components/button";
import { Image } from "./components/img";
import { Layout } from "./components/layout";
import { Mustafa } from "./components/mustafa";

export default function App() {
  async function onHandle() {
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
  }

  return (
    <Layout>
      <>
        <Mustafa<Record<string, number>> param={{ selcuk: 1, mustafa: 2 }} />

        <Button
          bgColor={"red"}
          fontSize={"h1"}
          onClick={onHandle}
          onCancel={() => console.log("cancel")}
        />

        <Image alt={""} src={""} />
      </>
    </Layout>
  );
}
