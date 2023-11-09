import React from "react";

const CreateTask = () => {
  return (
    <div className="flex justify-around mt-4">
      <input
        type="text"
        placeholder="Enter your Task..."
        className="w-19rem h-9 bg- rounded-sm placeholder:font-montserrat placeholder:text-opacity-70 "
      />
      <button className="w-24 h-9 rounded border-2 border-yellow-400 text-center text-yellow-400 text-xl font-normal font-['Montserrat'] hover:bg-#202020">
        Add
      </button>
    </div>
  );
};

export default CreateTask;
