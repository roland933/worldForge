import { getTaskPriorities } from "../../../services/tasks/taskService";
import { Select } from "../../ui/Form/Select/Select";

export function TaskPrioritySelect() {
const priorities = getTaskPriorities();
    return (
        <Select >
             <option>All</option>
            {priorities.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
            ))}

        </Select>
    )
}