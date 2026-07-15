import { createPortal } from "react-dom";

export function Modal({isOpen,onClose, className = "", children, ...props }) {
     if (!isOpen) {
        return null;
    }
    return createPortal(
        <div
            className={`
                 fixed 
                 inset-0 
                 flex 
                 items-center 
                 justify-center  
                 
                 backdrop-blur-2xl
                bg-[#111827]/50

                
                ${className}
            `}
            {...props}
        >
        <div className="bg-[#1A1F30]/65 border border-white/10 rounded-3xl w-full  max-w-4xl shadow-[0_30px_100px_rgba(0,0,0,.45)]">
            {children}

            </div>
        </div>,
        document.body
    );

}