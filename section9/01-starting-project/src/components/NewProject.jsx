import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
  const modal = useRef();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
      modal.current.open();
      return
    }

    onSave({
      title: title,
      description: description,
      dueDate: dueDate
    })
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2 className="text-xl font-bold text-stone-700 my-4"> Invalid Input</h2>
      <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
      <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
    </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
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
    </>
  )
}
