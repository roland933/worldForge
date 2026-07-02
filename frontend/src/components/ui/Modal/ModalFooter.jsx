export function ModalFooter({className="",children}) {
    return(
        <div className={
            `
             flex
                justify-end
                gap-3
                border-t
                  rounded-b-xl
                border-slate-700
                bg-slate-800/40
                px-6
                py-4
            
            ${className}

            `}>


            {children}

        </div>
    )
}