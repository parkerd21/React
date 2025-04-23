import Input from "./Input";

export default function NewProject({onSave}) {
  
  return (
    <form className="mt-4 text-right" >
      <div>
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
      </div>

      <Input title="TITLE" />
      <Input title="DESCRIPTION"/>
      <Input title="DUE DATE" type="date" />
      

    </form>
  )
}
