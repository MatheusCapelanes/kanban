import { CardProps } from "../../../../public/utils/mockTask"


const Card = (props: CardProps) => {
 return (
  <div key={props.id} className="bg-lightblue-100 p-5">
   <h1 className="font-bold">{props.title}</h1>
   <h2>{props.description}</h2>
  </div>
 
 )
}

export default Card