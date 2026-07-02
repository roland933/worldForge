import Input from "../Input/Input";

export function SearchInput({className,...props}) {

    return (
        <input
                className={`
                    w-full
                    rounded-xl
                    border
                    border-[#2B3245]
                    bg-[#1A2030]
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-500
                    focus:border-violet-500
                    ${className}
                `}
                {...props}
            />

    )

}