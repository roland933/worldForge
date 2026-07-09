type PlayerProps = {
    x:number,
    y:number,
    label:string,
}
export function PlayerMarker({x,y,label}:PlayerProps) {
    const MARKER_OFFSET = 24;
return (

    <div
    className="absolute -translate-x-1/2 -translate-y-full"
    style={{
        left: x,
        top:y - MARKER_OFFSET,
    }}
>
    {/* Marker */}

    <div className="relative">
<div className="flex flex-col items-center">
        <div
            className="
                px-2
                py-1
               
                rounded-lg

                bg-violet-600

                border border-violet-400/40

                text-xs
                font-semibold
                tracking-wide
                uppercase
                shadow-[0_0_20px_rgba(139,92,246,.35)]
            "
        >
            {label}
        </div>

        <div className="w-px h-2 bg-violet-400"/>

    <div className="w-2 h-2 rounded-full bg-violet-400"/>

        </div>

     

    </div>
</div>



)
}