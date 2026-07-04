
import { FilterBar } from "../../ui/Filter/FilterBar";
import { SearchInput } from "../../ui/SearchInput/SearchInput";
import { PromptCategorySelect } from "../PromptCategorySelect/PromptCategorySelect";


export function PromptLibraryFilter() {

    return(
         
        <FilterBar>
          <div className="w-96">

            <label className="mb-2 block text-sm font-medium text-slate-300">
                Title
            </label>

            <SearchInput placeholder="Prompt title..." />

        </div>

         <div className="w-60">

            <label className="mb-2 block text-sm font-medium text-slate-300">
                Category
            </label>

            <PromptCategorySelect />

        </div>

    
        </FilterBar>

          

    )


}