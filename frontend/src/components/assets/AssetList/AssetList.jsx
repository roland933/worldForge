import { AssetCard } from "../AssetCard/AssetCard"

export function AssetList({assets}) {
    
    return(
        <div>
            {assets.map(asset => (
                <AssetCard asset={asset} key={asset.id} />

            ))}
        </div>
       

    )

}