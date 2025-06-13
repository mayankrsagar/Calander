//Month navigaiton and display
import React from 'react';

interface CalendarProps{
    month:Date,
    prev:()=>void,
    next:()=>void
}



const CalendarHeader:React.FC<CalendarProps> = ({month,prev,next}) => {
  return (
    <div className="flex items-center justify-between mb-4">
        <button onClick={prev}>Prev</button>
        <h2>{month.toLocaleString("default",{month:'long',year:"numeric"})}</h2>
        <button onClick={next}>Next</button>
    </div>
  )
}

export default CalendarHeader