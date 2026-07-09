export function FormField({label="",className="",error,children,...props}) {

    return(
    <div   
    className={`
        flex flex-col gap-2 mb-4
        ${className}
    `}
    {...props}
    >
        {label && (
           <label   className="
                   
                    block
                    text-sm
                    font-medium
                    text-slate-300
                     
                 ">{label}  
          </label>
        )}
        {error && (
        <p className="mt-2 text-sm text-red-400">
            {error[0]}
        </p>
        )}

        {children}

    </div>

)

}