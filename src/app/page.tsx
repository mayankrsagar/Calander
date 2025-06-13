"use client";
import { useState } from 'react';

import CalendarGrid from './components/Calendar/CalendarGrid';
import CalendarHeader from './components/Calendar/CalendarHeader';
import EventForm from './components/EventModal/EventForm';
import { generateMonthMatrix } from './utils/dateUtils';

export default function Home() {
 
  const [month,setMonth]=useState<Date>(new Date());
  const [selectedDate,setSelectedDate]=useState<string | null>(null);
  const prev=()=>setMonth(prev=>new Date(prev.getFullYear(),prev.getMonth()-1,1));
  const next=()=>setMonth(prev=>new Date(prev.getFullYear(),prev.getMonth()+1,1));
  const matrix=generateMonthMatrix(month);
  
  return (
    <div>  
      <CalendarHeader prev={prev} next={next} month={month}/>
      <CalendarGrid matrix={matrix} onDayClick={setSelectedDate}/>
      {selectedDate && <EventForm onClose={()=>setSelectedDate(null)} selectedDate={selectedDate}/>}
    </div>
  );
}
