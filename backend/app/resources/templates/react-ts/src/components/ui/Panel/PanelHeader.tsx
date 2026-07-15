type PanelHeaderProps = {
    title:string,
    subtitle?:string,
    children?: React.ReactNode;

}

export function PanelHeader({title,subtitle,children}:PanelHeaderProps) {

    return (

         <section>
                <h3 className="text-lg font-semibold text-white">
                    {title}
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                   {subtitle}
                </p>

                {children}
            </section>

    )
}