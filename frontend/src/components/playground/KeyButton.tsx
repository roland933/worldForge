type KeyButtonProps = {
    label:string,
    active:boolean,
}

export function KeyButton({label,active}:KeyButtonProps) {

    return (
        <button className={
            `w-14 h-14 
            rounded-xl
            transition-all 
            duration-100 
                ease-out
            ${active ? "border-violet-400/40 bg-violet-500/20 translate-y-1 scale-95 inset-shadow-sm shadow-[0_0_20px_rgba(139,92,246,0.35)]" : "bg-white/5 border border-white/10  hover:bg-white/10"}
            border 
            `}>
            {label}
        </button>
    )

}