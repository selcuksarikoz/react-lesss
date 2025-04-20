
// sadece alt ve src yi HTMLImageElement referanstan al
// interface IImageProps extends Pick<HTMLImageElement, "alt" | "src"> {
//   onLoading? : boolean
// }


interface IImageProps extends Pick<HTMLImageElement, "alt" | "src"> {
    onLoading? : boolean
  }

  
export const Image = (props: IImageProps) => {
  return <img src={props.src} alt={props.alt} />
}