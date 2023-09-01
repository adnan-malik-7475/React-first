import React from 'react'
export const Input=({type, name,inputId,defaultValue,label,helperText,error,value ,onChange})=>{
    return(
        <div>
            {label &&<label className="block text-sm text-gray-600">{label}</label>}
            {helperText &&<label className="block text-sm text-gray-600">{helperText}</label>}
          <input  type={type}
            name={name}
            id={inputId}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}

            className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
            />
            <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>
    )
}