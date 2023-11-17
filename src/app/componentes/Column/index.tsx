import { CardProps, taskMockData } from "../../../../public/utils/mockTask"
import Card from "../Card"


interface ColumnProps {
 id: string
 title: string
}


const Column = (props: ColumnProps) => {

 const tasks: CardProps[] = taskMockData


 return (
  <div className="bg-gray-100 w-1/4 " key={props.id}>
   { tasks.filter((task) => task.step === props.title).map((item) => (
    <Card id={item.id} description={item.description} step={item.step} completed={item.completed} title={item.title} key={item.id}   />
   ))}
  </div>
 )
}

export default Column