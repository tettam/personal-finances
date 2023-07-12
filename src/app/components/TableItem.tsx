import { formatDate } from "../helpers/dateFilter"
import { Item } from "../types/Item"

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <tr>
      <td className="p-3 text-left">{formatDate(item.date)}</td>
      <td className="p-3 text-left">{item.category}</td>
      <td className="p-3 text-left">{item.title}</td>
      <td className="p-3 text-left">R$ {item.value}</td>
    </tr>
  )
}