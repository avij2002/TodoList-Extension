import React from "react";
import "./Task.css";
import CreateTask from "../CreateTask/CreateTask";
import DisplayTask from "../DisplayTask/DisplayTask";
const Task = () => {
  return (
    <>
      <div className="w-27.375rem h-40.8125rem bg-#343434 container rounded-1.875rem mt-8">
        <div className="text-white text-opacity-80 text-center font-montserrat text-5xl font-bold ">
          Todo List
        </div>
        <CreateTask />
        <DisplayTask />
      </div>
    </>
  );
};

export default Task;
