import logo from "../assets/no-projects.png";

export default function DefaultPage({createProject}){

    return(
    <div className="basis-4/5 flex flex-col items-center justify-center">
        <img src={logo} className="w-20 object-center" alt='Logo showing a book and a pen' />
        <h1 className="text-stone-500 font-semibold text-2xl m-6">No Project Selected</h1>
        <h2 className="text-stone-400 text-xl">Select a project or get started with a new one</h2>
        <button className="pt-3 pb-3 pl-6 pr-6 m-8 text-lg text-stone-400 bg-stone-700 rounded-lg hover:text-tone-100 hover:bg-stone-600" onClick={createProject}>Create new project</button>
    </div>
    );
}