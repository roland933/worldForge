export default function EmptyState({
    title,
    description,
    icon: Icon,
    action,
}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#2F3547] p-12 text-center">

            {Icon && (
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A2030]">
                    <Icon size={30} />
                </div>
            )}

            <h2 className="text-xl font-semibold">
                {title}
            </h2>

            <p className="mt-3 max-w-sm text-gray-400">
                {description}
            </p>

            {action && (
                <div className="mt-8">
                    {action}
                </div>
            )}

        </div>
    );
}