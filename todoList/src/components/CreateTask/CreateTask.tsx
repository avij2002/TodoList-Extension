import React from "react";
import axios from "axios";
interface ICreateTask {
  onTaskAdded: () => void;
}
const CreateTask: React.FC<ICreateTask> = (props) => {
  const [task, setTask] = React.useState("");
  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const addTask = () => {
    console.log(task);
    const sendTask = async () => {
      await axios.post(
        "http://localhost:5172/api/todo/addTask",
        { task: task },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };
    sendTask();
    setTask("");
    props.onTaskAdded();
  };
  return (
    <div className="flex justify-around mt-4">
      <form>
        <input
          type="text"
          placeholder="Enter your Task..."
          className="w-19rem h-9 bg- rounded-sm placeholder:font-montserrat placeholder:text-opacity-70 "
          onChange={getValue}
        />
      </form>
      <button
        className="w-24 h-9 rounded border-2 border-yellow-400 text-center text-yellow-400 text-xl font-normal font-['Montserrat'] hover:bg-#202020"
        onClick={addTask}
        type="submit"
      >
        Add
      </button>
    </div>
  );
};

export default CreateTask;
