/*
Importing all essential components
*/
import React, { useContext, useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import TodoState from "./context/todoState";

/*
 Used Tailwind for designing 
 
*/

function App() {
  return (
    <TodoState>
      <div className=" flex items-center justify-center bg-gradient-to-b from-indigo-400 to-rose-200 ... min-h-screen w-full pb-2 font-[poppins]">
        <div className="flex flex-col items-center p-2 sm:p-4 md:p-10 bg-black bg-opacity-10 shadow-inner w-fit rounded-3xl drop-shadow-lg">
          <div
            className={`flex items-center justify-center bg-gradient-to-b from-rose-200 to-indigo-400 md:text-3xl md:font-bold text- md:mb-10 text-xl font-bold mb-5 w-[22rem] sm:[25rem] md:w-[40rem] h-[15rem] rounded-full`}
          >
            <div className="text-7xl text-white">TODO ITEMS</div>
          </div>
          <div></div>
          <ListTodo />
          <AddTodo />
        </div>
      </div>
    </TodoState>
  );
}

export default App;
