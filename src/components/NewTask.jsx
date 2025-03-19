/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function NewTask({ onAdd }) {
  const [newTask, setNewTask] = useState("");
  function handleChange(event) {
    setNewTask(event.target.value);
  }
  function handleClick() {
if (newTask.trim() === '') {
    return
}

    onAdd(newTask);
    setNewTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={newTask}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
