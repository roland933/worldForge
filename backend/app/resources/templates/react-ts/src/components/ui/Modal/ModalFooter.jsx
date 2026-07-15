export function ModalFooter({className="",children}) {
    return(
        <div className={
            `
             flex
                justify-end
                gap-3
                border-t
                  rounded-b-3xl
               border-white/5
                
                px-6
                py-4
            
            ${className}

            `}>


            {children}

        </div>
    )
}