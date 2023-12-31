'use client'

import { useEffect, useState } from "react"
import { items } from "./data/items"
import { Item } from "./types/Item"
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter"
import { TableArea } from "./components/TableArea"
import { InfoArea } from "./components/InfoArea"

export default function Page() {
  const [list , setList] = useState<Item[]>(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    const filterList = filterListByMonth(list, currentMonth);
    setFilteredList(filterList);
  }, [list , currentMonth])


  return (
    <div>
      <div className="bg-blue-700 white- h-36 text-center">
        <h1 className="pt-6 text text-2xl font-bold">Sistema Financeiro</h1>
      </div>
      <div className="container m-auto max-w-screen-lg mb-12 h-screen text-black">
        <InfoArea currentMonth={currentMonth} />


        {/* AREA DE INSERÇÃO */}
        
        <TableArea list={filteredList}/>
      </div>
    </div>
  )
}
