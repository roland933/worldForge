export default function Input({
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="flex flex-col gap-2">

            {label && (
                <label className="text-sm font-medium text-gray-300">
                    {label}
                </label>
            )}

            <input
                className={`
                    w-full
                    rounded-xl
                    border
                    
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-500
                    focus:border-violet-500
                    ${error ? "border-red-500" : ""}
                    ${className}
                `}
                {...props}
            />

            {error && (
                <span className="text-sm text-red-400">
                    {error}
                </span>
            )}

        </div>
    );
}