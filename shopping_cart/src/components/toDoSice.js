import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    task: [],
  },
  reducers: {
    addTask: (state, action) => {
      console.log("dddddd", action.payload);
      const currentTask = {
        ...action.payload,
        status: false,
      };
      if (state.task) {
        state.task.push(currentTask);
      } else {
        state.task = [currentTask];
      }
    },
    toggleCompleteIncomplete: (state, action) => {
      const updatedTask = state.task.map((d) => {
        if (d.id == action.payload) {
          return {
            ...d,
            status: !d?.status,
          };
        } else {
          return d;
        }
      });
      state.task = updatedTask;
    },
    deleteTask: (state, action) => {
      const updatedTask = state?.task?.filter((d) => d?.id !== action?.payload);
      state.task = updatedTask;
    },
  },
});

export const { addTask, toggleCompleteIncomplete, deleteTask } =
  toDoSlice.actions;
export default toDoSlice.reducer;
