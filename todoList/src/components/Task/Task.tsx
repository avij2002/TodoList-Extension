import React from "react";
import "./Task.css";
import CreateTask from "../CreateTask/CreateTask";
import DisplayTask from "../DisplayTask/DisplayTask";
import axios from "axios";
interface IFetchApiData {
  task: string;
}
const Task = () => {
  const [tasks, setTasks] = React.useState<IFetchApiData[]>([]);
  const fetchAllTasks = async () => {
    console.log("Called again");
    await axios
      .get("http://localhost:5172/api/todo/fetchAllTasks", {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        setTasks(result.data);
        console.log(result.data[0].task);
      })
      .catch((error) => console.log(error));
  };
  React.useEffect(() => {
    fetchAllTasks();
    return;
  }, []);
  return (
    <>
      <div className="w-27.375rem h-40.8125rem bg-#343434 container rounded-1.875rem mt-8">
        <div className="text-white text-opacity-80 text-center font-montserrat text-5xl font-bold ">
          Todo List
        </div>
        <CreateTask onTaskAdded={fetchAllTasks} />
        {tasks.length === 0 ? (
          <DisplayTask title={"No Data"} />
        ) : (
          tasks.map((todo) => <DisplayTask title={todo.task} />)
        )}
      </div>
    </>
  );
};

export default Task;
