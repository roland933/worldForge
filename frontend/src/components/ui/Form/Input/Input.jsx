import { FORM_STYLES } from "../Theme/FromStyle"
export function Input({onChange,value,error,className="",...props}) {

    return(
        <input
                value={value}  
                onChange={onChange}
                className={`
                    ${FORM_STYLES.input}
                  ${error

                        ? "border-red-500"

                        : "border-slate-700"

                    }
                    ${className}
                `}
                {...props}
        />
    )

}