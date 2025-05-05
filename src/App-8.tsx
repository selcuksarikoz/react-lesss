import { JSX } from "react";

export default function App8() {
  // return <AuthComponent component={<div>mustafa abi selamlar</div>} />;
  return (
    <AuthComponent>
      <>
        <div>mustafa abi selamlar</div>
        <div>selcuk kardes</div>
      </>
    </AuthComponent>
  );
}

// function AuthComponent({ component }: { component: JSX.Element }) {
function AuthComponent({ children }: { children: JSX.Element }) {
  const isAuth = true;
  return isAuth ? children : null;
}
