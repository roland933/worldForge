type PanelProps = {
     className?: string,
     children: React.ReactNode;
}

export function Panel({className,children}:PanelProps) {

    return (
        <aside
            className="
                w-full
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                p-5
                flex
                flex-col
                gap-4
            "
        >
            {children}
        </aside>

    )

}