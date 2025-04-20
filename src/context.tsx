import { createContext, JSX, useState } from "react";

export type UserType = {
  name: string;
  age: number | undefined;
  email: string;
};

// store state type
interface State {
  user: UserType;
  setUser: (user: UserType) => void;
  setCredit: (credit: number) => void;
  credit: number;
}

// initial state
const state = {
  user: { name: "selcuk sarikoz", age: undefined, email: "" },
  credit: 500,
};

export const Store = createContext<State>({ ...state } as State);

export default function Management({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserType>(state.user);
  const [credit, setCredit] = useState<number>(state.credit);

  return (
    <Store.Provider
      value={{
        user,
        credit,
        setUser,
        setCredit,
      }}
    >
      {children}
    </Store.Provider>
  );
}
