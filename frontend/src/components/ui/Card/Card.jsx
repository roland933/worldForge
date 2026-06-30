export function Card({children,className=""}) {

    return (
<div className={`rounded-2xl bg-[#151922] border border-[#242938] p-8 ${className}`}>
            {children}



    </div>

    )

}