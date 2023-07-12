import { category } from "../data/category"
import { formatDate } from "../helpers/dateFilter"
import { Item } from "../types/Item"

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <tr className="justify-center">
      <td className="p-3 text-left">{formatDate(item.date)}</td>
      <div className={`inline-block rounded-md text-white bg-${category[item.category].color}-500`}>
        <td className="p-1.5 text-left">{category[item.category].title}</td>
      </div>
      <td className="p-3 text-left">{item.title}</td>
      <td className={`p-3 text-left text-bold
        ${category[item.category].expense ? 'text-red-500' : 'text-green-500'}`}>
        R$ {item.value}
      </td>
    </tr>
  )
}