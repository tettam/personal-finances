'use client'

import { useEffect, useState } from "react"
import { items } from "./data/items"
import { Item } from "./types/Item"
import { getCurrentMonth } from "./helpers/dateFilter"

export default function Page() {
  const [list , setList] = useState<Item[]>(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {

  }, [list, currentMonth])


  return (
    <div>
      <div className="bg-blue-700 white- h-36 text-center">
        <h1 className="pt-6 text text-2xl font-bold">Sistema Financeiro</h1>
      </div>
      <div className="container m-auto max-w-screen-lg mb-12 h-screen text-black">
        {/* ÁREA DE INFORMAÇÕES */}
        {/* AREA DE INSERÇÃO */}
        {/* TABELA DE ITENS: */}
      </div>
    </div>
  )
}
