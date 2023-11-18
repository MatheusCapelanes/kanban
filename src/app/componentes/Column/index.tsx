import { useEffect, useState } from "react"
import { CardProps, taskMockData } from "../../../../public/utils/mockTask"
import Card from "../Card"
import { Draggable } from "react-beautiful-dnd"


interface ColumnProps {
 id: string
 title: string
 // cards: CardProps[]
}


const Column = (props: ColumnProps) => {
 
 const [cards, setCards] = useState<CardProps[]>([])

 useEffect(() => {
  setCards(taskMockData)
 }, [])

 return ( 
    <div className="bg-gray-100 " >
     <h1 className="text-center text-white p-2 mb-5 bg-gray-600 ">{props.title}</h1>

     {cards.filter((task) => task.step === props.id).map((item, index) => (
      <Draggable
       draggableId={item.id}
       index={index}
       key={item.id}
      >
       {(provided) => (
        <div 
        className="w-full"
         ref={provided.innerRef} 
         {...provided.dragHandleProps}
         {...provided.draggableProps}
         style={{...provided.draggableProps.style}}
        >
         <Card id={item.id} description={item.description} step={item.step} completed={item.completed} title={item.title} key={item.id} />
        </div>
       )}

      </Draggable>
     ))}

    </div>
 )
}

export default Column