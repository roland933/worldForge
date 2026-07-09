import { FORM_STYLES } from "../Theme/FromStyle"
export function Select({onChange,error,className="",children,...props}){

    return(
        <select onChange={onChange} 
                className={`
                        ${FORM_STYLES.select}
                        ${error  ? "border-red-500" : "border-slate-700" } 
                        ${className}`
                }
                {...props}
                >
            {children}
        </select>
    )

}