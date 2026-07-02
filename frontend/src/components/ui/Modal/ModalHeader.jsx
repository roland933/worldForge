export function ModalHeader({className="",children}) {
    return(
        <div className={
            `
             border-b
            border-slate-700
            bg-slate-800/40
            px-6
            py-4
            rounded-t-xl
            text-2xl
            
            ${className}
            
            `
            }>
            {children}

        </div>
    )
}