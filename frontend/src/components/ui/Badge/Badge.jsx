import { badgeStyles } from "./badgeStyles";
import { badgeConfig } from "./badgeConfig";
export default function Badge({
    children,
    variant = badgeConfig.defaultVariant,
    className = "",
}) {


    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
                ${badgeStyles[variant]}
                ${className}
            `}
        >
            {children}
        </span>

    );

}