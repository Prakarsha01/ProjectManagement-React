import { useRef, useState } from "react"
import Input from "./Input"

export default function NewProject({addNewProject, projects}){
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave(){
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
    // Clearing the input fields
    handleCancel();
  }

  function handleCancel(){
    titleRef.current.value = null;
    descriptionRef.current.value = null;
    dateRef.current.value = null;
  }
    return(
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
    )
}