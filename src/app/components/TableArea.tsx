import { Item } from "../types/Item"
import { TableItem } from "./TableItem"

type Props = {
  list: Item[]
}
export const TableArea = ( {list}: Props ) => {
  return (
    <table className="w-full bg-white shadow-gray-900 border-2 p-5 mt-5 rounded-lg">
      <thead className="">
        <tr>
          <th className="p-3 text-left w-28">Data</th>
          <th className="p-3 text-left w-32">Categoria</th>
          <th className="p-3 text-left w-auto">Título</th>
          <th className="p-3 text-left w-36">Valor</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item}/>
        ))}
      </tbody>
    </table>
  )
}