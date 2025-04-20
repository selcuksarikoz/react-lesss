import { cva } from "class-variance-authority";
import clsx from "clsx";
import { useState } from "react";

const styles = cva("btn", {
  variants: {
    bgColor: {
      "red": "red",
      "blue": "blue",
    }, 
    fontSize: {
      "h1": "h1",
      "h2": "h2",
    }
  }
})

interface IButtonProps extends Partial<HTMLButtonElement> {
  bgColor: "red" | "blue",
  fontSize: "h1" | "h2",
  onClick: () => Promise<void>
  onCancel: () => void
}

export const Button = (props: IButtonProps) => {
  const {bgColor, fontSize, onClick, onCancel} = props;

  const [loading, setLoading] = useState(false)


  // icerden handleClicke tiklatip, propstaki onClicki trigger ediyorum promise oldugu icinde async/promise yapisini kullanabiliyorum
  async function onHandleClick(){
    setLoading(true)

    onClick().finally(()=> {
      setLoading(false)
    })
  }

  function onHandleCancel(e){
    e.stopPropagation()
    onCancel()
  }

  return <button onClick={onHandleClick} className={clsx(

    styles({
      bgColor,
      fontSize
    })

  )}>
  
  {loading ? "loading" : null}

  
  <div onClick={onHandleCancel}>
  tikla bana
  </div>

  tikla button
  </button>
}



