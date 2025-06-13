import React from 'react';

//individual day
import { Day } from '@/app/utils/dateUtils';

interface DayProps{
    day:Day,
    eventsCount:number;
    onclick:(dayKey:string)=>void;
}

const DayCell : React.FC<DayProps>= ({day,onclick,eventsCount}) => {
  return (
    <div 
     className={`border h-20 p-1 cursor-pointer flex flex-col justify-between
        ${day.isCurrentMonth ? '' : 'text-gray-400'}
        ${day.isToday ? 'bg-blue-100 rounded' : ''}`}
    onClick={()=>onclick(day.key)}
    >
          <span className="text-sm">{day.date.getDate()}</span>
      {eventsCount > 0 && (
        <span className="text-xs bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {eventsCount}
        </span>
      )}
</div>
  )
}

export default DayCell