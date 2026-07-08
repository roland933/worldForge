export function Background() {
    return(
        <div className="fixed inset-0 -z-20">

            <img src="/background.png"  className="w-full h-full object-cover"/>

            <div className="absolute inset-0 bg-gradient-to-br from-black/45
via-[#111827]/40
to-black/60" />

        </div>
    )
}