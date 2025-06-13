"use client";
//add and edit form
import React, { useState } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {
  addEvent,
  deleteEvent,
  Event,
} from '@/features/eventSlice';
import {
  AppDispatch,
  RootState,
} from '@/store';
import { Dialog } from '@headlessui/react';

interface EventFormProps{
    selectedDate:string | null,
    onClose:()=>void,
}

const EventForm: React.FC<EventFormProps> = ({selectedDate,onClose}) => {

const dispatch=useDispatch<AppDispatch>();
const existing=useSelector((state: RootState)=>{
    if(!selectedDate)return [];
    return state.events[selectedDate] ||[]
})

const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");

const handleSave = (): void => {
  if (!title || !selectedDate) return;

  const newEvent: Event = {
    id: uuidv4(),
    title,
    description: desc,
    date: selectedDate,
  };

  dispatch(addEvent(newEvent));
  onClose();
};



  //   return (
  //    <Dialog open={!!selectedDate} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
  //     <DialogPanel className="fixed inset-0 bg-black opacity-50" />
  //     <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
  //       <h3 className="text-lg font-semibold mb-4">Events on {selectedDate}</h3>
  //       <ul className="mb-4">
  //         {existing.map(ev => (
  //           <li key={ev.id} className="flex justify-between mb-2">
  //             <span>{ev.title}</span>
  //             <button onClick={() => dispatch(deleteEvent({ date: ev.date, id: ev.id }))} className="text-red-500">Delete</button>
  //           </li>
  //         ))}
  //       </ul>
  //       <div className="space-y-2 mb-4">
  //         <input
  //           className="w-full border p-2"
  //           placeholder="Title"
  //           value={title}
  //           onChange={e => setTitle(e.target.value)}
  //         />
  //         <textarea
  //           className="w-full border p-2"
  //           placeholder="Description"
  //           value={desc}
  //           onChange={e => setDesc(e.target.value)}
  //         />
  //       </div>
  //       <div className="flex justify-end space-x-2">
  //         <button onClick={onClose} className="px-4 py-2">Cancel</button>
  //         <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
  //       </div>
  //     </div>
  //   </Dialog>
  // )
  return (
        <Dialog open={!!selectedDate} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" /> */}
      <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" /> 
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md z-10">
        <h3 className="text-lg font-semibold mb-4">Events on {selectedDate}</h3>
        <ul className="mb-4">
          {existing.map(ev => (
            <li key={ev.id} className="flex justify-between mb-2">
              <span>{ev.title}</span>
              <button
                onClick={() => dispatch(deleteEvent({ date: ev.date, id: ev.id }))}
                className="text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="space-y-2 mb-4">
          <input
            type="text"
            className="w-full border p-2"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border p-2"
            placeholder="Description"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2">Cancel</button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </Dialog>
  )
  
}

export default EventForm