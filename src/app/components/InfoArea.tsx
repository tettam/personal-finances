import { formatCurrentMonth } from "../helpers/dateFilter"

type Props = {
  currentMonth: string
}

export const InfoArea = ({currentMonth}: Props) => {
  return (
    <div className="w-full bg-white shadow-gray-900 border-2 p-5 rounded-lg -mt-9 flex items-align">
        <div className="flex items-center flex-auto w-56">
          <svg fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="w-8 h-8 text-blue-600 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <div className="items-center flex-1 justify-center flex">
            {formatCurrentMonth(currentMonth)}
          </div>



          <svg fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="w-8 h-8 text-blue-600 cursor-pointer text-">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg> 
        </div>


      <div className="flex-auto w-64 flex items-center justify-end">
        resume    
      </div>
    </div>
  )
}

