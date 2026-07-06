import { FilterBar } from "../../ui/Filter/FilterBar";
import { SearchInput } from "../../ui/SearchInput/SearchInput";
import { AssetCategorySelect } from "../AssetCategorySelect/AssetCategorySelect";
import { AssetTypeSelect } from "../AssetCategoryType/AssetTypeSelect";

export function AssetFilter() {

    return(
         
        <FilterBar>

    <div className="w-96">

        <label className="mb-2 block text-sm font-medium text-slate-300">
            Search
        </label>

        <SearchInput placeholder="Search asset..." />

    </div>

    <div className="w-52">

        <label className="mb-2 block text-sm font-medium text-slate-300">
            Category
        </label>

        <AssetCategorySelect />

    </div>

    <div className="w-52">

        <label className="mb-2 block text-sm font-medium text-slate-300">
            Type
        </label>

        <AssetTypeSelect />

    </div>

</FilterBar>

          

    )


}