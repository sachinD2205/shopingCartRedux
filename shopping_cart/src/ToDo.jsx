import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addTask,
  deleteTask,
  toggleCompleteIncomplete,
} from "./components/toDoSice";
import { useState } from "react";

const ToDo = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  const allTask = useSelector((state) => state?.todo)?.task;
  // const dispatch = useDispatch();
  console.log("allTask", allTask);
  return (
    <>
      <h1> To Do List</h1>
      <div>
        <span> Task Name</span>
        <input
          type="text"
          onChange={(e) => {
            setTaskName(e?.target?.value);
          }}
          value={taskName}
        />
        <button
          onClick={() => {
            setTaskName("");
            dispatch(
              addTask({
                name: taskName,
                id: Date.now(),
              })
            );
          }}
        >
          Add New Task
        </button>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th> Task </th>
              <th> Status </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {allTask?.map((d) => {
              return (
                <tr key={d?.id}>
                  <td> {d?.name} </td>
                  <td>{d?.status ? "completed" : "pending"} </td>
                  <td>
                    <button
                      onClick={() => dispatch(toggleCompleteIncomplete(d?.id))}
                      size="small"
                      style={{ color: "red" }}
                    >
                      toggle
                    </button>
                    <button onClick={() => dispatch(deleteTask(d?.id))}>
                      delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ToDo;
