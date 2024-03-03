export default function Sidebar({createProject, projects, selectProject}){

    return(
    <div className="container left-0 bg-black h-screen basis-1/5 pt-16 mt-10 rounded-tr-2xl">
        <h1 className="text-white font-semibold text-2xl ml-8">YOUR PROJECTS</h1>
        <button className="pt-3 pb-3 pl-6 pr-6 m-8 rounded-lg text-lg text-stone-400 bg-stone-700 hover:text-tone-100 hover:bg-stone-600" onClick={createProject}> + Add Project</button>
        <ul className="pr-8">
            {projects.map((item)=>{
                return(
                <li className="pl-3 pt-2 pb-2 m-3 text-lg text-stone-400 hover:text-white hover:bg-stone-900" key={item.id}>
                    <button className="w-full h-full text-left" onClick={()=>selectProject(item.id)}>
                        {item.title}
                    </button>
                </li>)})
            }
        </ul>
    </div>
    )
}