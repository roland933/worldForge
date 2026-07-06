import { buttonConfig } from "./buttonConfig";
import { buttonStyles } from "./ButtonStyles";
export default function Button({
    children,
    onClick,
    variant = buttonConfig.defaultVariant,
    className = "",
    type="button",
    icon: Icon,
    ...props
}) {



    return (

        <button
            onClick={onClick}
            type={type}
            className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-5
                py-3
                hover:cursor-pointer
                font-medium
                transition
                duration-200
                ${buttonStyles[variant]}
                ${className}
            `}
            {...props}
        >

            {Icon && <Icon size={18} />}

            {children}

        </button>

    );

}