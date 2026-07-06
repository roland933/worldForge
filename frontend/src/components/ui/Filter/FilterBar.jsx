import { FilterBarStyle } from "./FilterBarStyle"

export function FilterBar({className="",children}) {

    return (
        <div className={`
                ${FilterBarStyle.default}
                ${className}
        
        `}>
            {children}    
        </div>
    )
}