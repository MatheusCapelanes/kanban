import { CardProps } from "../../../../public/utils/mockTask"


const Card = (props: CardProps) => {
 return (
  <div key={props.id} className="bg-blue-100 p-2 m-2">
   <h1 className="font-bold">{props.title}</h1>
   {/* <h2>{props.description}</h2> */}
  </div>
 
 )
}

export default Card