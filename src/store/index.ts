import { configureStore } from '@reduxjs/toolkit';

import eventReducer, { EventsState } from '../features/eventSlice';

function loadState():EventsState| undefined{
    if(typeof window ==="undefined") return undefined;
    
    try {
        const serlized=localStorage.getItem("calendarEvents");
        return serlized ?JSON.parse(serlized) as EventsState: undefined;
    } catch (error: unknown) {
        if(error instanceof Error)
            console.log(error);
        return undefined;
    }
}

const preloadedState:EventsState=loadState()??{};

export const store=configureStore({
    reducer:{
        events:eventReducer,
    },
    preloadedState:{
        events:preloadedState,
    }
})
//every time any action is dispatched, this subscriber runs and we get latest state.events

if(typeof window !=="undefined"){

store.subscribe(()=>{
    try {
        const state=store.getState().events;
        localStorage.setItem('calendarEvents',JSON.stringify(state));
    } catch (error:unknown) {
        if(error instanceof Error)
            console.log(error);
    }
});
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch