import { forwardRef } from "react"

const Input= forwardRef(function Input({labelText,inputType,istextArea}, ref){
    let labelStyle="block font-bold text-stone-500 text-lg ml-16"
    let inputStyle="focus:outline-none border-b border-stone-400 w-2/3 ml-16 bg-stone-200"
    return(
    <p className="m-4" >
        <label className={labelStyle}>{labelText}</label>
        {istextArea? <textarea ref = {ref} className={inputStyle} type={inputType}/>: <input  ref = {ref} className={inputStyle}  type={inputType}></input>}
    </p>
    )
})
export default Input;