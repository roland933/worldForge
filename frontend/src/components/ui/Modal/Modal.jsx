export function Modal({isOpen,onClose, className = "", children, ...props }) {
     if (!isOpen) {
        return null;
    }
    return (
        <div
            className={`
                 fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm 
                ${className}
            `}
            {...props}
        >
        <div className="bg-[#1A1F2B] rounded-xl  w-full  max-w-4xl">
            {children}

            </div>
        </div>
    );

}