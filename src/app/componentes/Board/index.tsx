
import Column from "../Column"

const columns = [
 { id: "todo", title: "To do" },
 { id: "in-progress", title: "In progress" },
 { id: "testing", title: "Testing" },
]


const Board = () => {
 return (
  <>
  <nav>
   <h1>Board</h1>
  </nav>
  <section className="flex justify-around">
   { columns.map((col) => (
    <Column id={col.id} title={col.title} />
   ))}
  </section>
  </>
 )
}

export default Board