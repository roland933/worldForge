export function Progress ({value}) {

    return(

        <div>

            <div className="flex justify-between mb-2 text-sm">

                    <span className="text-gray-400">
                        Progress
                    </span>

                    <span className="font-medium">
                         {value}%
                    </span>

                </div>
       

                <div className="h-3 rounded-full bg-[#1F2433]">

                    <div className={`h-full rounded-full bg-violet-600 shadow-[0_0_12px_rgba(139,92,246,0.35)] transition-all`} style={{
                            width: `${value}%`
                        }}/>

                </div>
        </div>
    )
}