import { FORM_STYLES } from "../Theme/FromStyle"

export function Textarea({onChange,value,rows=3,className="",...props}) {

    return(
        <textarea
                value={value}  
                onChange={onChange}
                rows={rows}
                className={`
                    ${FORM_STYLES.textarea}
                    ${className}
                `}
                {...props}
        />
    )

}