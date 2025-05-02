import { useRef } from "react";
import Input from "./Input";

export default function SelectedProject({ project }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })


  return (

    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>

      </header>
      {/* <div>
        <Input value = {project.title} type="text" label="Title" ref={titleRef} />
        <Input value = {project.description} label="Description" textarea={true} ref={descriptionRef} />
        <Input value = {project.dueDate} label="Due Date" ref={dueDateRef} type={'date'} />
      </div> */}
    </div>
  )
}