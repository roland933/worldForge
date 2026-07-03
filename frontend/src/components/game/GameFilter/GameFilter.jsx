import { ForgeSelect } from "../../shared/forge/ForgeSelect";
import { FilterBar } from "../../ui/Filter/FilterBar";
import { SearchInput } from "../../ui/SearchInput/SearchInput";


export function GameFilter() {

    return(
         
        <FilterBar>
   
        <div className="w-60">

            <label className="mb-2 block text-sm font-medium text-slate-300">
                Forges
            </label>

            <ForgeSelect />

        </div>

        

        </FilterBar>

          

    )


}