export default function PageHeader({
    title,
    subtitle,
    children,
}) {
    return (
        <div className="flex items-center justify-between mb-8">

            <div>

                <h1 className="text-3xl font-bold text-white">
                    {title}
                </h1>

                {subtitle && (
                    <p className="mt-2 text-gray-400">
                        {subtitle}
                    </p>
                )}

            </div>

            {children}

        </div>
    );
}