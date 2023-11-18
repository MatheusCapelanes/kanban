"use-client"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import Column from "../Column"
import { useState, useEffect } from "react"
import { CardProps, taskMockData } from "../../../../public/utils/mockTask"

const columns = [
 { id: "todo", title: "To Do" },
 { id: "doing", title: "Doing" },
 { id: "done", title: "Done" },
]

const Board = () => {

 function onDragEnd(result: any) {
  console.log(result)
  
  // for (let i = 0; i < cards.length; i++) {
  //  if (cards[i].id === result.draggableId) {
  //   cards[i].step = result.destination.droppableId
  //  }
  // }
 
 }

 return (
  <>
   <nav>
    <h1 className="text-center text-white p-5 mb-5 bg-gray-600 ">Board</h1>
   </nav>
   <section className="flex gap-10">
    <DragDropContext
     onDragEnd={onDragEnd}
    >
     {columns.map((col, index) => (
      <Droppable
      droppableId={col.id} 
      key={col.id}
      >
       {(provided) => (
        <div key={col.id} {...provided.droppableProps}  ref={provided.innerRef}>
         <Column id={col.id} title={col.title}  />
        </div>
        
       )}
       
      </Droppable>
     ))}
     
    </DragDropContext>
   </section>
  </>
 )
}

export default Board