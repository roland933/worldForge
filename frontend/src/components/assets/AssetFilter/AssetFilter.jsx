import { FilterBar } from "../../ui/Filter/FilterBar";
import { SearchInput } from "../../ui/SearchInput/SearchInput";
import { AssetCategorySelect } from "../AssetCategorySelect/AssetCategorySelect";
import { AssetTypeSelect } from "../AssetCategoryType/AssetTypeSelect";

export function AssetFilter() {

    return(
         
        <FilterBar>
             <div className="w-96">
                <SearchInput placeholder="Asset name..."/>
            </div>

            <div className="w-60">
                <AssetCategorySelect />
            </div>

            <div className="w-60">
                <AssetTypeSelect />
            </div>
        </FilterBar>

          

    )


}