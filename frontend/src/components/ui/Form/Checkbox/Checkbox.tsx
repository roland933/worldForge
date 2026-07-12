type CheckboxProps = {
    checked: boolean;
    label: string;
    onChange: () => void;
};

export function Checkbox({
    checked,
    label,
    onChange,
}: CheckboxProps) {

    return (
        <button
            type="button"
            onClick={onChange}
            className="
                w-full
                flex
                items-center
                gap-3
                text-left
                group
            "
        >
            <div
                className={`
                    w-5
                    h-5
                    rounded-md
                    border
                    transition-all
                    duration-200
                    flex
                    items-center
                    justify-center

                    ${
                        checked
                            ? "bg-violet-500 border-violet-400 shadow-[0_0_15px_rgba(139,92,246,.45)]"
                            : "bg-white/5 border-white/15 group-hover:border-violet-400/50"
                    }
                `}
            >
                {checked && (
                    <span className="text-xs text-white font-bold">
                        ✓
                    </span>
                )}
            </div>

            <span className="text-sm text-white/80 group-hover:text-white transition">
                {label}
            </span>
        </button>
    );
}