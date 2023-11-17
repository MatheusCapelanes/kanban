import { CardProps, taskMockData } from "../../../../public/utils/mockTask"
import Card from "../Card"


interface ColumnProps {
 id: string
 title: string
}


const Column = (props: ColumnProps) => {

 const tasks = taskMockData

 return (
  <div className="bg-gray-100 w-1/4 " key={props.id}>
   <h1 className="text-center text-white p-2 mb-5 bg-gray-600 ">{props.title}</h1>
   { tasks.filter((task) => task.step === props.title).map((item) => (
    <Card id={item.id} description={item.description} step={item.step} completed={item.completed} title={item.title} key={item.id}   />
   ))}
  </div>
 )
}

export default Column