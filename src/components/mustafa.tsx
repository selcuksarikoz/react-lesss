
interface IMustafProps<T> {
  param: T
}

export function Mustafa<T>(props: IMustafProps<T>){

  function onHandleClick(){
    console.log(props, typeof props);
  }

  return <div onClick={onHandleClick}>
    mustafa
  </div>
}