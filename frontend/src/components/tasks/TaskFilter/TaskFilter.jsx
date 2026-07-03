import { ForgeSelect } from "../../shared/forge/ForgeSelect";
import { FilterBar } from "../../ui/Filter/FilterBar";
import { SearchInput } from "../../ui/SearchInput/SearchInput";
import { TaskPrioritySelect } from "../TaskPrioritySelect/TaskPrioritySelect";
import { TaskStatusSelect } from "../TaskStatusSelect/TaskStatusSelect";


export function TaskFilter() {

    return(
         
        <FilterBar>
          <div className="w-96">

            <label className="mb-2 block text-sm font-medium text-slate-300">
                Search task
            </label>

            <SearchInput placeholder="Task name..." />

        </div>

         <div className="w-60">

            <label className="mb-2 block text-sm font-medium text-slate-300">
                Priority
            </label>

            <TaskPrioritySelect />

        </div>

        <div className="w-60">

            <label className="mb-2 block text-sm font-medium text-slate-300">
                Forges
            </label>

            <ForgeSelect />

        </div>

          <div className="w-60">

            <label className="mb-2 block text-sm font-medium text-slate-300">
                Statuses
            </label>

            <TaskStatusSelect />

        </div>

        </FilterBar>

          

    )


}