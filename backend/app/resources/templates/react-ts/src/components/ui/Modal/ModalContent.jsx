export function ModalContent({className="",children}) {
    return(
        <div className={`p-8 space-y-6 ${className}`}>
            {children}

        </div>
    )
}