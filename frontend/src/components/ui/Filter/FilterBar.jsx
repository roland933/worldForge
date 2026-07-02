export function FilterBar({className="",children}) {

    return (
        <div className={`
                 flex
                items-end
                gap-4
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/50
                p-5
                mb-5
                ${className}
        
        `}>
            {children}    
        </div>
    )
}