export interface Day{
    date:Date;
    isCurrentMonth:boolean;
    isToday:boolean;
    key: string;//yyyy-mm-dd
}

export const generateMonthMatrix=(month:Date):Day[][]=>{
const matrix: Day[][]=[];
const year=month.getFullYear();
const mo=month.getMonth();

//first Day of month
const firstDay=new Date(year,mo,1);
//get from 0 to 6 like sun to sat
const startWeekDay=firstDay.getDay();

//added +1 in month because start from 0 to 11 for month;
// 0 → Sets the date to the last day of the previous month
// const daysInMonth=new Date(year,mo+1,0).getDate();


 // Previous month's tail
  const prevDaysCount = startWeekDay;
//   const prevMonth = new Date(year, mo - 1, 1);
//   const prevMonthDays = new Date(year, mo, 0).getDate();
// const prevMonth = new Date(year, mo === 0 ? year - 1 : year, mo === 0 ? 11 : mo - 1, 1);
// const prevMonthDays = new Date(year, mo, 0).getDate();


 let dayIndex = 1 - prevDaysCount; //1 - 2 = -1 means the slot is for previous date of month like 1 to 30| 31 | 28 |29
  for (let week = 0; week < 6; week++) {
    const weekArr: Day[] = [];
    for (let dow = 0; dow < 7; dow++, dayIndex++) {
      const date = new Date(year, mo, dayIndex);
      const isCurrentMonth = date.getMonth() === mo;
      const today = new Date();
      const isToday = date.toDateString() === today.toDateString();
    //   const isToday = 
    //     date.getFullYear() === today.getFullYear() &&
    //     date.getMonth() === today.getMonth() &&
    //     date.getDate() === today.getDate();
      const key = date.toISOString().slice(0, 10);
      weekArr.push({ date, isCurrentMonth, isToday, key });
    }
    matrix.push(weekArr);
  }

  return matrix;
}



