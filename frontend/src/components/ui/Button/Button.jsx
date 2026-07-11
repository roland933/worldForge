import { buttonConfig } from "./buttonConfig";
import { buttonStyles } from "./ButtonStyles";
import { ButtonSizes } from "./buttonVariants";
export default function Button({
    children,
    onClick,
    variant = buttonConfig.defaultVariant,
    size= buttonConfig.defaultSize,
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
                ${buttonStyles[size]}
                inline-flex
                items-center
                justify-center
                gap-2
              
                hover:cursor-pointer
                disabled:cursor-not-allowed
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