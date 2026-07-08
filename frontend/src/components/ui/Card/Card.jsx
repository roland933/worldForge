export function Card({children,className=""}) {

    return (
<div className={`rounded-2xl hover:bg-white/5 hover:border-violet-400/20 transition-all duration-300 bg-white/2 backdrop-blur-xl border border-white/12 p-8 ${className}`}>
            {children}



    </div>

    )

}