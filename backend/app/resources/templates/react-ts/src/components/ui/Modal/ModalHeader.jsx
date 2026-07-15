export function ModalHeader({className="",children}) {
    return(
        <div className={
            `
             border-b
            border-white/5
           
            px-6
            py-4
            rounded-t-3xl
            text-violet-200
            text-2xl
            
            ${className}
            
            `
            }>
            {children}

        </div>
    )
}