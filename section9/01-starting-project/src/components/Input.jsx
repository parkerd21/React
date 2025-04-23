export default function Input({label, textarea = false, ...props}) {
  const sharedClassName = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {textarea ? <textarea {...props} className={sharedClassName}/>
        : <input {...props} className={sharedClassName}/>}
      
    </p>
  )

}