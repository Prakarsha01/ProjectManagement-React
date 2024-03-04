import { useRef } from "react";

import Modal from "./Modal";

export default function ProjectPage({ projectDetails, addTask, clearTask, deleteProject}) {
  const taskRef = useRef();
  const errorModal = useRef();

  function handleAddTask() {
    if (!taskRef.current.value){
        errorModal.current.open();
        return null;
      }
    addTask(projectDetails.id, taskRef.current.value);
    taskRef.current.value = null;
  }

  function formatDate(inputDate) {
    const parsedDate = new Date(inputDate);

    const monthAbbreviation = parsedDate.toLocaleString("default", {
      month: "short",
    });

    const dayOfMonth = String(parsedDate.getDate()).padStart(2, "0");

    const year = parsedDate.getFullYear();
    const formattedDate = `${monthAbbreviation} ${dayOfMonth}, ${year}`;

    return formattedDate;
  }

  return (
    <>
    <Modal ref={errorModal} buttonCaption="Okay">
        <h2 className="font-bold">Invalid Input!</h2>
        <p>Oops... looks like you forgot to enter a task.</p>
        <p>Please make sure you provide a valid value for the input field.</p>
    </Modal>
    <div className="basis-4/5 flex flex-col items-start pl-10 pr-60 mt-24">
      <div className="flex mb-5 w-full justify-between">
        <h1 className="text-black font-bold text-4xl">
          {projectDetails.title}
        </h1>{" "}
        <button className="p-1 text-lg text-black hover:underline" onClick={()=>deleteProject(projectDetails.id)}>
          Delete
        </button>
      </div>
      <p className="mb-5">{formatDate(projectDetails.date)}</p>
      <p className="mb-5">{projectDetails.description}</p>
      <h1 className="text-black font-bold text-2xl w-full border-t-2 pt-4">
        Tasks
      </h1>
      <div className="flex mb-8 mt-6">
        <input className="bg-stone-200 p-1" ref={taskRef} type="text"></input>
        <button
          className="p-1 ml-6 text-lg text-black rounded-lg hover:underline hover:outline-none focus:outline-none"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <ul className="w-full pl-4 pr-4 pt-8 pb-8 bg-stone-100">
        {projectDetails.tasks.map((item, index) => {
          return (
            <div key={index} className="flex w-full justify-between text-lg pb-2">
              <li >{item}</li>
              <button className="p-1 text-lg text-black hover:underline" onClick={()=>clearTask(projectDetails.id, index)}>
                Clear
              </button>
            </div>
          );
        })}
      </ul>
    </div>
    </>
  );
}
