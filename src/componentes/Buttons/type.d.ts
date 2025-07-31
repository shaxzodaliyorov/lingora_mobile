
export interface Props {
  children?:ReactNode,
  value?:string,
  setValue?:(str:string) => void
  secure?:boolean;
  isError?:boolean
}
