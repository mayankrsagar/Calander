import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export interface Event{
    id:string,
    title:string,
    description?:string,
    date:string,//yy-mm-dd
    startTime?:string,
    endTime?:string
}
//this is to store multiple event in one date so create array
export interface EventsState{
    [date: string]:Event[];
}

//create object to fast lookup
const initialState: EventsState={};

const eventsSlice =createSlice({
    name:"event",
    initialState,
    reducers:{
        addEvent(state,actions:PayloadAction<Event>){
            const e=actions.payload;
            state[e.date]=state[e.date] ||[];
            state[e.date].push(e); 
        },
        updateEvent(state,actions:PayloadAction<Event>){
            const e=actions.payload;
            const list=state[e.date] || [];
            const idx=list.findIndex(ele=>ele.id ===e.id);
            if(idx!==-1) list[idx]=e;
        },
        deleteEvent(state,actions:PayloadAction<{date: string;id:string}>){
            const {date,id}=actions.payload;
            state[date]=(state[date] || []).filter(ele=>ele.id !==id);
        }
    }
})

export const {updateEvent,deleteEvent,addEvent}=eventsSlice.actions;
export default eventsSlice.reducer;