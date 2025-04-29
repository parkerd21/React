import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ onSave }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    // todo: add validation

    onSave({
      title: title,
      description: description,
      dueDate: dueDate
    })
  }

  return (

    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" label="Title" ref={titleRef} />
        <Input label="Description" textarea={true} ref={descriptionRef} />
        <Input label="Due Date" ref={dueDateRef} type={'date'} />
      </div>
    </div>
  )
}
