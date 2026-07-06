import { FORM_STYLES } from "../Theme/FromStyle"
export function Select({onChange,className="",children,...props}){

    return(
        <select onChange={onChange} 
                className={`
                        ${FORM_STYLES.select} 
                        ${className}`
                }
                {...props}
                >
            {children}
        </select>
    )

}