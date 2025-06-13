//To show month

import React from 'react';

import { useSelector } from 'react-redux';

import { Day } from '@/app/utils/dateUtils';
import { RootState } from '@/store';

import DayCell from './DayCell';

interface CalendarGridProps{
    onDayClick:(dayKey: string)=>void;
    matrix:Day[][];
}

const weeks=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']



const CalendarGrid:React.FC<CalendarGridProps> = ({onDayClick,matrix}) => {

    const events=useSelector((state:RootState)=>state.events);

    return (
    <div className="grid grid-cols-7 gap-px bg-gray-300">

        {weeks.map((week,idx)=>(
           <div className="bg-gray-200 p-2 text-center font-medium" key={idx}>
            {week}
    </div>     
        ))  
        }

    {matrix.flat().map(day=>(
        <DayCell 
        key={day.key}
        day={day}
        eventsCount={(events[day.key]||[] ).length}
        onclick={onDayClick}
        />
    ))}
    
    </div>
  )
}

export default CalendarGrid