
export function GraphCanvas({
    children,

}) {
    return (
         <section
            className="
                rounded-3xl
                 shadow-[0_0_30px_rgba(0,0,0,.15)]
                overflow-hidden
                border 
                border-white/10
                bg-white/[0.03]
                backdrop-blur-3xl
                w-full
                
            "
        >

           {children}

        
        </section>
    );
}