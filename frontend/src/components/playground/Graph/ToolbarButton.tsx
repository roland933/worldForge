type ToolbarButtonProps = {

    icon: React.ReactNode;

    children: React.ReactNode;

};

export function ToolbarButton({

    icon,

    children,

}:ToolbarButtonProps){

    return(

        <button
            className="
                flex
                items-center
                gap-2

                px-4
                py-2

                rounded-xl

                bg-white/5

                border border-white/10

                hover:bg-white/10

                transition
            "
        >

            {icon}

            {children}

        </button>

    );

}