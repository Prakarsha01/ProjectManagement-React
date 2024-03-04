import { useRef, useState } from "react"
import Input from "./Input"
import Modal from "./Modal";

export default function NewProject({addNewProject, projects, cancelNewProject}){
  const errorModal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave(){
   
    if (!titleRef.current.value||!descriptionRef.current.value || !dateRef.current.value ){
      errorModal.current.open();
      return null;
    }
    let projectId;
    if (projects.length>=1){
      projectId = projects[projects.length - 1].id+1
    }else{
      projectId = 1
    }    
    const newProject = {
      id: projectId,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      tasks:[]
    };
    addNewProject(newProject);
    handleCancel();
  }

  function handleCancel(){
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dateRef.current.value = "";
    cancelNewProject();
  }

    return(
      <>
      <Modal ref={errorModal} buttonCaption="Okay">
        <h2 className="font-bold pb-4 text-2xl" >Invalid Input!</h2>
        <p>Oops... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
        <div className="mt-16  flex">
        <div className="flex-col">
          <menu className="flex justify-center basis-4/5">
          <button className="pt-3 pb-3 pl-6 pr-6 m-2 text-lg rounded-lg text-black hover:text-tone-100 hover:bg-stone-600 hover:text-white" onClick={handleCancel}>Cancel</button>
          <button className="pt-3 pb-3 pl-6 pr-6 m-2 text-lg text-white bg-stone-700 rounded-lg hover:text-tone-100 hover:bg-stone-600" onClick={handleSave}>Save</button>
          </menu>
          <div className="flex-col items-center w-[50rem]" >
          <Input ref= {titleRef} labelText="TITLE" inputType="text" istextArea="true"/>
          <Input ref = {descriptionRef} labelText="DESCRIPTION" inputType="text" istextArea={true}/>
          <Input ref={dateRef} labelText="DUE DATE" inputType="date" istextArea={false}/>
        </div>
        </div>
      </div>
      </>
    )
}