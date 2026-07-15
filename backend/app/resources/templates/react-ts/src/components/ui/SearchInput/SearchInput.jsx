import Input from "../Input/Input";

export function SearchInput({className,...props}) {

    return (
        <input
                className={`
                    w-full
                    rounded-xl
                    border
                    border-white/12
                    bg-white/[0.03]
                    px-4
                    py-3
                    
                    outline-none
                    transition
                    placeholder:text-violet-100
                    focus:border-violet-500
                    ${className}
                `}
                {...props}
            />

    )

}