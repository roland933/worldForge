import { Card } from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import { Badge } from "../../ui/Badge/Badge";

export function AssetCard({ asset, onOpen }) {

    return (
        <Card className="flex flex-col">

            {/* Preview */}

            <div className="flex h-40 items-center justify-center rounded-xl bg-slate-800">

                {asset.thumbnail ? (

                    <img
                        src={asset.thumbnail}
                        alt={asset.name}
                        className="h-full w-full rounded-xl object-cover"
                    />

                ) : (

                    <span className="text-5xl">🖼️</span>

                )}

            </div>

            {/* Content */}

            <div className="mt-5 flex-1">

                <h3 className="text-lg font-semibold text-white">

                    {asset.name}

                </h3>

                <p className="mt-2 text-sm text-slate-400">

                    {asset.description}

                </p>

            </div>

            {/* Meta */}

            <div className="mt-4 flex flex-wrap gap-2">

                <Badge>

                    {asset.category}

                </Badge>

                <Badge>

                    {asset.type}

                </Badge>

            </div>

            {/* Actions */}

            <Button
                className="mt-6 w-full"
                onClick={() => onOpen(asset)}
            >
                Open Asset
            </Button>

        </Card>
    );

}