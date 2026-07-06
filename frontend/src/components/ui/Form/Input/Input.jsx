import { FORM_STYLES } from "../Theme/FromStyle"
export function Input({onChange,value,className="",...props}) {

    return(
        <input
                value={value}  
                onChange={onChange}
                className={`
                    ${FORM_STYLES.input}
                    ${className}
                `}
                {...props}
        />
    )

}