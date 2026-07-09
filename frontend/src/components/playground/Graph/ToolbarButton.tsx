type ToolbarButtonProps = {

    icon: React.ReactNode;

    children: React.ReactNode;
    onClick?:() => void,
    active?:boolean,

};



export function ToolbarButton({

    icon,

    children,
    onClick,
    active

}:ToolbarButtonProps){

    return(

        <button
            onClick={onClick}
            className={`
                flex
                items-center
                gap-2
                cursor-pointer    
                px-4
                py-2
                ${active ? 'bg-violet-600' : 'bg-white/5  hover:bg-white/10'}
                rounded-xl
                border border-white/10
                transition
            `}
        >

            {icon}

            {children}

        </button>

    );

}