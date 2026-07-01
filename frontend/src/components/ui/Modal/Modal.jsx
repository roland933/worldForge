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
        <div className="bg-[#1A1F2B] rounded-xl p-6 w-7xl">
            {children}

            </div>
        </div>
    );

}