import { JSX } from "react"

export const Layout = ({children}: {children: JSX.Element}) => {
  return (
    <div>
    <div>ben headerim</div>


      {children}


    <div>ben footerim</div>
  </div>
  )
}

