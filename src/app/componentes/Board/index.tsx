
import Column from "../Column"

const columns = [
 { id: "todo", title: "To Do" },
 { id: "in-progress", title: "In Progress" },
 { id: "testing", title: "Testing" },
]


const Board = () => {
 return (
  <>
  <nav>
   <h1 className="text-center text-white p-5 mb-5 bg-gray-600 ">Board</h1>
  </nav>
  <section  className="flex justify-around">
   { columns.map((col) => (
    <Column key={col.id} id={col.id} title={col.title} />
   ))}
  </section>
  </>
 )
}

export default Board